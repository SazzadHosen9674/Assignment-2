import { Star, X } from "lucide-react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white rounded-lg p-5 w-96 max-h-[85vh] flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">{movie.name}</h2>
          <button onClick={onClose} className="">
            <X />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          {movie.image?.original && (
            <img
              src={movie.image.original}
              alt={movie.name}
              className="w-full rounded mb-3"
            />
          )}

          <p className="text-sm text-gray-400 mb-2">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            {movie.rating?.average ?? "N/A"} &nbsp;•&nbsp; 📅{" "}
            {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}
          </p>

          <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
