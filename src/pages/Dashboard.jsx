import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AdminNav from "../components/AdminNav/AdminNav";
function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className="w-[100%] flex flex-row ">
        <div className="w-[20%] h-screen border-r">
          <AdminNav />
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
