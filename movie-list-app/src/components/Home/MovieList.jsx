export const MovieList = ({ movies }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 cursor-pointer"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-sm">{movie.Title}</h3>
            <p className="text-xs text-gray-500">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
