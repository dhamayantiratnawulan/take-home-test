import { FaRegCalendarAlt } from "react-icons/fa";

export const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      key={movie.imdbID}
      className="shadow hover:shadow-lg transition p-4 cursor-pointer"
      onClick={() => onClick(movie)}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.currentTarget.src = "/assets/image_not_available.jpg";
        }}
      />
      <div className="my-2 flex gap-1">
        <FaRegCalendarAlt />
        <p className="text-xs text-gray-500">{movie.Year}</p>
        <p className="text-xs text-gray-500">|</p>
        <p className="text-xs text-gray-500">{movie.Type}</p>
      </div>
      <h3 className="mt-2 font-semibold text-sm">{movie.Title}</h3>
    </div>
  );
};
