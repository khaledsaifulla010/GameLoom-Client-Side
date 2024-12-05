import logo from "../../../assets/images/logo/websiteLogo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="font-2 rounded-xl p-2 border shadow-md hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-1000 ease-in-out">
      <div className="navbar bg-base-100">
        <Link className="navbar-start">
          <img
            className="w-28 animate__animated animate__slideInDown animate__infinite "
            style={{ animationDuration: "8s" }}
            src={logo}
          />
        </Link>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-8 font-bold text-base">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/reviews"}>All Reviews</NavLink>
            <NavLink to={" /addReview"}>Add Reviews</NavLink>

            <NavLink to={"/myReviews"}>My Reviews</NavLink>

            <NavLink to={"/myWatchlist"}>Game WatchList</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
            <div tabIndex={0} role="button">
              <h1 className="text-5xl">
                <FaUserCircle />
              </h1>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow border-2"
            >
              <Link
                to={"/login"}
                className="border p-1 w-full rounded-xl text-purple-500 bg-purple-200 border-purple-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95 text-center"
              >
                Login
              </Link>
              <Link
                className="font-bold text-base text-center mt-1"
                to={"/myProfile"}
              >
                My Profile
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
