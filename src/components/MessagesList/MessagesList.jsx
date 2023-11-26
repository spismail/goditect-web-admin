import React, { useState } from "react";
import { Tooltip } from "flowbite-react";
import { MdMarkEmailRead as MessageIcon } from "react-icons/md";
import { AiOutlineFieldTime as TimeIcon } from "react-icons/ai";
import { MdFolderDelete as DeleteIcon } from "react-icons/md";
import { AiFillEye as ViewIcon } from "react-icons/ai";
import MessagesViewModal from "./MessagesViewModal";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useDeleteMessageMutation } from "../../featured/counterApi/counterApi";

function MessagesList({ items = [] }) {
  const [open, setOpen] = useState(false);
  // open modal hanlder

  const openModalHandler = () => {
    setOpen(true);
  };

  // close modal handler

  const closeModalHandler = () => {
    setOpen(false);
  };

  const { id, name, email, phone, times } = items || {};

  //  this mutation for delete appointment item

  const [deleteMessage, { isLoading, isError, error }] =
    useDeleteMessageMutation();

  // delete handler

  const deleteHandler = (value) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deleteMessage(value);
      }
    });
  };

  return (
    <>
      <div className="w-full p-5 m-2 bg-gradient-to-tr from-sky-200 to-sky-100 rounded-md">
        <div className="w-full grid grid-cols-1 place-items-center gap-4  md:grid md:grid-cols-2 md:place-content-center md:place-items-center lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center">
          {/* Section one */}
          <div className="w-full">
            <div className="flex justify-evenly items-center space-x-4">
              <MessageIcon size={30} color="#F451A2" />
              <div>
                <h3 className="text-[14px] font-semibold text-[#0a3d62] lg:text-[16px]">
                  {name}
                </h3>
                <p className="text-sm font-light text-[#0a3d62]">{phone}</p>
              </div>
            </div>
          </div>
          {/* section two */}
          <div className="w-full flex justify-between items-center">
            <Tooltip content={times}>
              <TimeIcon size={25} color="#4a69bd" className="cursor-pointer" />
            </Tooltip>
            {/* View Icon */}
            <ViewIcon
              onClick={openModalHandler}
              size={25}
              color="#4a69bd"
              className="cursor-pointer"
            />
            {/* Delete Icon */}
            <DeleteIcon
              onClick={() => deleteHandler(id)}
              size={25}
              color="#b71540"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <MessagesViewModal
        open={open}
        closeModalHandler={closeModalHandler}
        items={items}
      />
    </>
  );
}

export default MessagesList;
