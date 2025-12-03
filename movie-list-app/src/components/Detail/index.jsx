import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

import { fetchMovieDetail } from "@/features/movies/movieSlice";
import { useEffect } from "react";
import { ShimmerDetail } from "./ShimmerDetail";

export const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    if (!detail || detail.imdbID !== id) {
      dispatch(fetchMovieDetail(id));
    }
  }, [id, dispatch, detail]);

  return (
    <div className="p-4 max-w-4xl mx-auto" data-testid="detail-component">
      {loading && <ShimmerDetail />}
      {!loading && detail && (
        <>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-4 text-gray-600 hover:text-black"
          >
            <FaArrowLeft /> Back
          </button>
          <div className="bg-white shadow-md rounded-xl p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  src={detail.Poster}
                  alt={detail.Title}
                  className="w-full md:w-64 rounded-lg shadow"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/image_not_available.jpg";
                  }}
                />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="text-3xl font-bold mb-2">{detail.Title}</h1>
                <p className="text-gray-600 italic mb-3">{detail.Plot}</p>

                <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                  <FaRegClock />
                  <span>{detail.Runtime}</span>
                </div>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Genre:</span> {detail.Genre}
                  </p>
                  <p>
                    <span className="font-semibold">Actors:</span>{" "}
                    {detail.Actors}
                  </p>
                  <p>
                    <span className="font-semibold">Director:</span>{" "}
                    {detail.Director}
                  </p>
                  <p>
                    <span className="font-semibold">Released:</span>{" "}
                    {detail.Released}
                  </p>
                </div>

                <div className="mt-4 flex items-center text-yellow-500 text-lg font-semibold">
                  <FaStar className="mr-1" />
                  {detail.imdbRating}
                  <span className="ml-1 text-gray-500 text-sm">
                    ({detail.imdbVotes} votes)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
