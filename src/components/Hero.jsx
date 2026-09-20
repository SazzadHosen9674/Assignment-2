import { Link } from "react-router-dom";
import heroImg from "../assets/hero img.jpg";
const Hero = () => {
  return (
    <div
      className="h-[80vh] md:h-[88vh] bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-black/70 h-full w-full flex justify-center ">
        <div className="flex flex-col items-center max-w-[600px] mt-30 text-center py-20 space-x-3">
          <h1 className="text-3xl md:text-7xl font-bold text-white">
            Discover Movies
          </h1>
          <p className="text-gray-500 mt-3 mb-5 text-xl md:text-2xl">
            Explore and discover your favorite movies from around the world.
          </p>

          <Link
            to="/movies"
            className="bg-red-500 px-5 text-white text-xl md:text-2xl  font-bold py-3 rounded-2xl hover:bg-white transition-all delay-100 hover:text-red-500"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
