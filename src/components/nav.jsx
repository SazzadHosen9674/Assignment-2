import { Film } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-gray-500/60">
      <nav className="flex justify-between items-center px-6 py-4 container mx-auto ">
        <div className="flex justify-center items-center gap-1.5">
          <Film />
          <span>Movie</span>
        </div>
        <Link
          to="/movies"
          className="bg-red-500 px-4 text-white font-bold py-2 rounded-2xl hover:bg-white transition-all delay-100 hover:text-red-500"
        >
          movies
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
