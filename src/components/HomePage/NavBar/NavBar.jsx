import logo from "../../../assets/images/logo/websiteLogo.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import DarkWhiteMode from "../../DarkWhiteMode/DarkWhiteMode";

const NavBar = () => {
  const { user, logoutUser, userEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser().then(() => {
      toast.success("Successfully Logged Out !", { position: "top-center" });
    });
    navigate(0);
  };

  return (
    <div className="font-2 rounded-xl p-2 border shadow-md hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-1000 ease-in-out fixed left-0 right-0 z-10 top-0">
      <div className="navbar bg-base-100">
        <Link className="navbar-start">
          <img
            className="w-28 animate__animated animate__pulse animate__infinite "
            style={{ animationDuration: "4s" }}
            src={logo}
          />
        </Link>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-8 font-bold text-base text-red-600">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/reviews"}>All Reviews</NavLink>
            {user && <NavLink to={"/addReview"}>Add Review</NavLink>}

            {user && (
              <NavLink to={`/myReviews/${userEmail}`}>My Reviews</NavLink>
            )}

            {user && (
              <NavLink to={`/myWatchlist/${userEmail}`}>Game WatchList</NavLink>
            )}
            <NavLink to={"/contactUs"}>Contact Us</NavLink>
            <NavLink to={"/faq"}>FAQ</NavLink>
            <DarkWhiteMode></DarkWhiteMode>
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
            {user ? (
              <div className="w-3 h-3 border-2 rounded-full bg-green-500 absolute ml-12 -mt-4"></div>
            ) : (
              ""
            )}
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow border-2 gap-y-2"
            >
              {user && (
                <Link
                  className="border p-1 w-full rounded-xl text-blue-500 bg-blue-200 border-blue-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95 text-center"
                  to={"/myProfile"}
                >
                  My Profile
                </Link>
              )}
              <Link
                to={"/login"}
                className="border p-1 w-full rounded-xl text-purple-500 bg-purple-200 border-purple-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95 text-center"
              >
                Login
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
