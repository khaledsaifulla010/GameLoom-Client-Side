import logo from "../../../assets/images/logo/websiteLogo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logoutUser, userEmail} = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser().then(() => {
      toast.success("Successfully Logged Out !", { position: "top-center" });
    });
  };

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
            <NavLink to={"/addReview"}>Add Review</NavLink>

            <NavLink to={`/myReviews/${userEmail}`}>My Reviews</NavLink>

            <NavLink to={`/myWatchlist/${userEmail}`}>Game WatchList</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user?.displayName}
            className="dropdown dropdown-bottom dropdown-end dropdown-hover "
          >
            <div tabIndex={0} role="button">
              {user && user?.photoURL ? (
                <img
                  className="w-16 h-16 border border-dashed border-slate-700 rounded-full p-1"
                  src={user?.photoURL}
                />
              ) : (
                <h1 className="text-5xl">
                  <FaUserCircle />
                </h1>
              )}
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
              {user && (
                <button
                  onClick={handleLogout}
                  className="border p-1 w-full rounded-xl text-red-500 bg-red-200 border-red-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95 text-center"
                >
                  Logout
                </button>
              )}
            </ul>
            <Tooltip id="my-tooltip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
