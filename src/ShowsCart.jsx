import { Star } from "lucide-react";
import React from "react";

const ShowsCart = ({ name, rating, img, premiered, onSeeDetails }) => {
  return (
    <div className="mt-2">
      <div
        className="border border-gray-600 p-2
       rounded-2xl overflow-hidden w-66 "
      >
        <div className="h-40 flex  justify-center items-center">
          {img ? (
            <img
              src={img}
              alt={name}
              className=" rounded-2xl h-full w-full object-cover"
            />
          ) : (
            <span className="text-gray-500">Poster</span>
          )}
        </div>

        <div className="p-3 border-b border-gray-600">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            {rating?.average ?? "N/A"} • 📅 {premiered ? premiered : "N/A"}
          </p>
        </div>

        <div className="p-3">
          <button
            onClick={onSeeDetails}
            className="w-full bg-red-500 text-white py-1 rounded text-sm hover:bg-gray-800 "
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowsCart;
