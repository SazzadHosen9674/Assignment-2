import React, { useEffect, useState } from "react";
import ShowsCart from "../ShowsCart";
import MovieModal from "../MovieModal";
import { Search } from "lucide-react";

const MovieListing = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (query.trim() === "") {
          const res = await fetch("https://api.tvmaze.com/shows");
          const data = await res.json();
          setMovies(data);
        } else {
          const res = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`,
          );
          const data = await res.json();
          const normalized = data.map((item) => item.show);
          setMovies(normalized);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <div className="container mx-auto px-2">
        <div>
          <form className="flex py-3 " onSubmit={handleSubmit}>
            <input
              className="flex-1 rounded-3xl border-2 border-solid mr-3 border-black px-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search movie ..."
            />
            <button
              className="bg-red-100 px-9 text-2xl py-4 rounded-2xl cursor-pointer"
              type="submit"
            >
              <Search />
            </button>
          </form>

          <div className="flex justify-center md:justify-between  items-end flex-wrap gap-2.5 ">
            {loading ? (
              <h2>loading.....</h2>
            ) : (
              movies.map((movie) => (
                <ShowsCart
                  key={movie.id}
                  name={movie.name}
                  rating={movie?.rating}
                  img={movie?.image?.medium}
                  premiered={movie.premiered}
                  onSeeDetails={() => setSelectedMovie(movie)}
                />
              ))
            )}
            <MovieModal
              movie={selectedMovie}
              onClose={() => setSelectedMovie(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
