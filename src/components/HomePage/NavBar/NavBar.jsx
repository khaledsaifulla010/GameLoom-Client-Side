import logo from "../../../assets/images/logo/websiteLogo.jpg";
import { Link, NavLink } from "react-router-dom";

import icon4 from "../../../assets/images/icons/icon4.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="font-2 rounded-xl p-2 border shadow-md hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-1000 ease-in-out">
      <div className="navbar bg-base-100">
        <Link className="navbar-start">
          <img className="w-28 " src={logo} />
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
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
