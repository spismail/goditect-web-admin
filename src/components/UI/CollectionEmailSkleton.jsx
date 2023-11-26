import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CollectionEmailSkleton() {
  return (
    <div className="w-full p-5 m-2 bg-gradient-to-tr from-sky-200 to-sky-100 rounded-md">
      <div className="flex justify-between items-center">
        {/* Email Icon */}
        <Skeleton className="w-[30px] h-[30px] rounded-full" />
        {/* Email */}
        <h3 className="text-[14px] font-semibold text-[#0a3d62] lg:text-[16px]">
          <Skeleton className="w-[50px]  rounded-full" />
        </h3>
        {/* Time Icon */}
        <Skeleton className="w-[30px] h-[30px] rounded-full" />
        {/* Copy Icon */}
        <Skeleton className="w-[30px] h-[30px] rounded-full" />
      </div>
    </div>
  );
}

export default CollectionEmailSkleton;
