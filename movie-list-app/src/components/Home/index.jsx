import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies, setKeyword } from "@/features/movies/movieSlice";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { MovieCard } from "../shared/MovieCard";
import { DialogDetail } from "./DialogDetail";
import { ErrorState } from "../shared/ErrorState";
import { ShimmerCard } from "./ShimmerCard";

export const Home = () => {
  const dispatch = useDispatch();
  const { list, hasMore, page, keyword, error, loading } = useSelector(
    (state) => state.movies
  );
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const loaderRef = useRef(null);

  const handleClickCard = (movie) => {
    setSelectedMovie(movie);
    setIsOpenDialog(true);
  };
  const handleLoadMore = () => {
    if (!loading && hasMore && keyword.length >= 3) {
      dispatch(fetchMovies({ keyword, page }));
    }
  };
  useInfiniteScroll(loaderRef, handleLoadMore, loading);
  useEffect(() => {
    if (keyword.length < 3) return;

    dispatch(fetchMovies({ keyword, page: 1 }));
  }, [keyword]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-2 text-center">Movie Finder</h1>
        <div className="text-center my-2 text-gray-500">
          <p className="text-lg">Search any movie title to get started</p>
        </div>

        <input
          type="text"
          value={keyword}
          onChange={(e) => dispatch(setKeyword(e.target.value))}
          placeholder="Input min 3 characters to search..."
          className="border p-2 w-full"
        />

        {loading && page === 1 && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12"
            data-testid="shimmer-movie-list"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        )}

        {list && list.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
              {list.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onClick={handleClickCard}
                />
              ))}
              {loading &&
                page > 1 &&
                Array.from({ length: 4 }).map((_, index) => (
                  <ShimmerCard key={`shimmer-${index}`} />
                ))}
            </div>

            <div ref={loaderRef} className="h-8" />
          </>
        )}
        {!loading && error && (
          <div
            className="text-center mt-12 text-red-500"
            data-testid="error-state"
          >
            <ErrorState message={error} />
          </div>
        )}
      </div>
      <DialogDetail
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
        movieDetail={selectedMovie}
      ></DialogDetail>
    </>
  );
};
