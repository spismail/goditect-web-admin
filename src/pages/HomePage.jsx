import React from "react";
import TotalAppointment from "../components/TotalAppointment";
import TotalMessage from "../components/TotalMessage";
import TotalSubscriber from "../components/TotalSubscriber";
import { SlRefresh as RefreshIcon } from "react-icons/sl";
import {
  useGetAppointmentQuery,
  useGetMessageQuery,

  useGetSubscriberQuery,
} from "../featured/counterApi/counterApi";
function HomePage() {
  const { refetch: refetch1 } = useGetAppointmentQuery();
  const { refetch: refetch2 } = useGetMessageQuery();

  const { refetch: refetch4 } = useGetSubscriberQuery();

  // refresh handler

  const refreshHandler = () => {
    refetch1();
    refetch2();
    refetch3();
    refetch4();
  };

  return (
    <div className="p-2 relative">
      <div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-3 md:gap-3  lg:grid lg:grid-cols-3 lg:gap-3">
        <TotalAppointment />

        <TotalMessage />
        <TotalSubscriber />
      </div>

      {/* Refresh Icon */}
      <div
        onClick={refreshHandler}
        className="w-[40px] h-[40px] bg-[#ef5777] rounded-full flex justify-center items-center cursor-pointer fixed right-2 bottom-2 "
      >
        <RefreshIcon size={20} color="white" />
      </div>
    </div>
  );
}

export default HomePage;
