import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UserLoggedOut } from "../featured/auth/authSlice";
import { AiOutlineLogout as LogoutIcon } from "react-icons/ai";
import { Tooltip } from "flowbite-react";
import logo from "../assets/logo/logo.png";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function NavBar() {
  const dispatch = useDispatch();

  // User Logout handler

  const logoutHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "do you want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logout!", "Successfully logout", "success");
        localStorage.clear("");
        dispatch(UserLoggedOut());
      }
    });
  };

  return (
    <div className="bg-[#ffffff] shadow-sm">
      <div className=" w-[90%] m-auto p-4 ">
        <div className="flex justify-between items-center">
          <Link to="/dashboard/home">
            <img src={logo} alt="logo.png" className="inline w-[100px]" />
          </Link>
          <div className="flex items-center ">
            <Tooltip content="Logout">
              <LogoutIcon
                onClick={logoutHandler}
                className="cursor-pointer text-[#2c3e50] hover:text-[#2ed573]"
                size={25}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
