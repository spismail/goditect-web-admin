import React from "react";
import { MdEmail as MessageIcon } from "react-icons/md";
import { SiMinutemailer as AppointmentIcon } from "react-icons/si";
import { SiGooglenews as GmailCollectionIcon } from "react-icons/si";
import { MdPaid as PaidIcon } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Button } from "flowbite-react";
function AdminNav() {
  return (
    <div className="w-full">
      <div className="mt-10 flex flex-col justify-start space-y-3">
        {/* Appointment Nav Item  */}
        <NavLink
          to="/dashboard/appointment"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F451A2" : null,
              fontWeight: isActive ? "bold" : null,
            };
          }}
        >
          <Button color="gray" className="border-0 shadow-none bg-white">
            <div className="flex items-center space-x-2">
              <AppointmentIcon size={20} color="#2c2c54" />
              <p className="hidden md:block lg:block">Appointment</p>
            </div>
          </Button>
        </NavLink>

        {/* Message Nav Item  */}
        <NavLink
          to="/dashboard/message"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F451A2" : null,
              fontWeight: isActive ? "bold" : null,
            };
          }}
        >
          <Button color="gray" className="border-0 shadow-none bg-white ">
            <div className="flex items-center space-x-2">
              <MessageIcon size={20} color="#2c2c54" />
              <p className="hidden md:block lg:block">Message</p>
            </div>
          </Button>
        </NavLink>

        {/* Gamil Collection Nav Item  */}
        <NavLink
          to="/dashboard/collectionEmail"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F451A2" : null,
              fontWeight: isActive ? "bold" : null,
            };
          }}
        >
          <Button color="gray" className="border-0 shadow-none bg-white ">
            <div className="flex items-center space-x-2">
              <GmailCollectionIcon size={20} color="#2c2c54" />
              <p className="hidden md:block lg:block">Collections</p>
            </div>
          </Button>
        </NavLink>
        {/* Pain Member Nav Item */}
        <NavLink
          to="/dashboard/paidrequest"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F451A2" : null,
              fontWeight: isActive ? "bold" : null,
            };
          }}
        >
          <Button color="gray" className="border-0 shadow-none bg-white">
            <div className="flex items-center space-x-2">
              <PaidIcon size={20} color="#2c2c54" />
              <p className="hidden md:block lg:block">Paid request</p>
            </div>
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminNav;
