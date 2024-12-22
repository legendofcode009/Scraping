import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { SiScrapy } from "react-icons/si";
import Logout from "./Logout";

const Sidebar = () => {
  const authUser = true;

  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 
      overflow-y-auto border-r bg-glass
    "
    >
      <nav className="h-full flex flex-col gap-3">
        <Link
          to="/"
          className="p-1.5 justify-center transition-colors duration-200 rounded-lg
          hover:bg-gray-800"
        >
          <FaGithub size={22} />
        </Link>

        <Link
          to="/"
          className="p-1.5 justify-center transition-colors duration-200 rounded-lg
          hover:bg-gray-800"
        >
          <IoHomeOutline size={22} />
        </Link>

        {authUser && (
          <Link
            to="/likes"
            className="p-1.5 justify-center transition-colors duration-200 rounded-lg
          hover:bg-gray-800"
          >
            <CiHeart size={22} />
          </Link>
        )}
        {authUser && (
          <Link
            to="/explore"
            className="p-1.5 justify-center transition-colors duration-200 rounded-lg
          hover:bg-gray-800"
          >
            <MdOutlineExplore size={22} />
          </Link>
        )}
        {authUser && (
          <Link
            to="/Scrapping"
            className="p-1.5 justify-center transition-colors duration-200 rounded-lg
          hover:bg-gray-800"
          >
            <SiScrapy size={22} />
          </Link>
        )}
        {!authUser && (
          <Link
            to="./login"
            className="p-1.5 justify-center transition-colors duration-200 rounded-lg
          hover:bg-gray-800"
          >
            <IoLogInOutline size={22} />
          </Link>
        )}
        {!authUser && (
          <Link
            to="/signup"
            className="p-1.5 justify-center transition-colors duration-200 rounded-lg
          hover:bg-gray-800"
          >
            <SiGnuprivacyguard size={22} />
          </Link>
        )}
        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
