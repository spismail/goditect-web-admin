import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MessageSkleton() {
  return (
    <div className="w-full p-5 m-2 bg-gradient-to-tr from-sky-200 to-sky-100 rounded-md">
      <div className="w-full grid grid-cols-1 place-items-center gap-4  md:grid md:grid-cols-2 md:place-content-center md:place-items-center lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center">
        {/* Section one */}
        <div className="w-full">
          <div className="flex justify-evenly items-center space-x-4">
            <Skeleton className="w-[30px] h-[30px] rounded-full" />
            <div>
              <Skeleton className="w-[70px]" />
              <Skeleton className="w-[70px]" />
            </div>
          </div>
        </div>
        {/* section two */}
        <div className="w-full flex justify-between items-center">
          <Skeleton className="w-[30px] h-[30px] rounded-full" />
          {/* View Icon */}
          <Skeleton className="w-[30px] h-[30px] rounded-full" />
          {/* Delete Icon */}
          <Skeleton className="w-[30px] h-[30px] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default MessageSkleton;
