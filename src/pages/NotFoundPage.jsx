import React from "react";
import NotfoundImg from "../assets/banner/notfound.png";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-[calc(100vh_-_100px)] flex flex-col justify-center items-center">
      <img src={NotfoundImg} alt="notfound/png" className="w-[300px]" />
      <Link to="/" className="text-sm">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
