import React from "react";
import profileimg from "../assets/img/Personal image.jpeg";
import { Link } from "react-router-dom";

export default function ProfileAvatar() {
  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={profileimg} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <Link to="/ecommerce-app-clientside/signup">
              Signup <div className="badge badge-primary">Test</div>
            </Link>
          </li>
          <li>
            <Link to="/ecommerce-app-clientside/login">
              Login <div className="badge badge-primary">Test</div>
            </Link>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
