import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to="/">Home</Link>
            <Link>Item 3</Link>
            <Link to={`/myapplications/${user?.email}`}>My Applications</Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">Home</Link>
          <Link className="mx-3">item</Link>
          <Link to={`/myapplications`}>My Applications</Link>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" className="btn">
            Log In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
