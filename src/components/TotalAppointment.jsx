import React from "react";
import { SiMinutemailer as AppointmentIcon } from "react-icons/si";
import { useGetAppointmentQuery } from "../featured/counterApi/counterApi";
import { TbError404Off as ErrorIcon } from "react-icons/tb";
import { Tooltip } from "flowbite-react";
import { SiZeromq as ZeroIcon } from "react-icons/si";
import { LineWave } from "react-loader-spinner";

function TotalAppointment() {
  const { data, isLoading, isError, error } = useGetAppointmentQuery();

  //     decide what to render

  let content = null;

  if (isLoading) {
    content = (
      <LineWave
        height="50"
        width="50"
        color="#ffff"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    );
  } else if (!isLoading && isError) {
    content = (
      <Tooltip content={error?.message || error?.data} placement="right-end">
        <ErrorIcon color="red" size={20} />
      </Tooltip>
    );
  } else if (!isLoading && !isError && data?.length > 0) {
    content = (
      <span className="text-sm font-bold text-[#30336b]">{data?.length}</span>
    );
  } else if (!isLoading && !isError && data?.length == 0) {
    content = (
      <Tooltip content="Zero request" placement="right-end">
        <ZeroIcon color="#ef5777" size={20} />
      </Tooltip>
    );
  }

  return (
    <div className="p-6 bg-[#c7ecee] rounded-md">
      <div className="flex flex-col justify-center items-center space-y-3">
        <AppointmentIcon size={25} color="#30336b" />
        <h3 className="text-[16px] font-bold text-[#30336b]">
          Total Appointment
        </h3>
        {content}
      </div>
    </div>
  );
}

export default TotalAppointment;
