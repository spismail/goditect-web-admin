import { Tooltip } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineMail as EmailIcon } from "react-icons/ai";
import { AiOutlineFieldTime as TimeIcon } from "react-icons/ai";
import { AiFillCopy as CopyIcon } from "react-icons/ai";
import { MdFolderDelete as DeleteIcon } from "react-icons/md";
import { useDeleteSubscriberMutation } from "../../featured/counterApi/counterApi";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function CollectionEmailList({ items = {} }) {
  const { id, newsEmail, times } = items || {};

  const [deleteSubscriber, { isLoading, isSuccess, isError, error }] =
    useDeleteSubscriberMutation();

  //   copy email handler

  const copyEmailItemHanlder = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copyed", {
      position: "top-right",
    });
  };

  //   delete subscriber email handler

  const deleteSubscriberHandler = (value) => {
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
        deleteSubscriber(value);
      }
    });
  };

  return (
    <div className="w-full p-5 m-2 bg-gradient-to-tr from-sky-200 to-sky-100 rounded-md">
      <div className="flex justify-between items-center flex-wrap">
        {/* Email Icon */}
        <EmailIcon size={25} color="#F451A2" />
        {/* Email */}
        <h3 className="text-[14px] font-semibold text-[#0a3d62] lg:text-[16px]">
          {newsEmail}
        </h3>
        {/* Time Icon */}
        <Tooltip content={`${times}`}>
          <TimeIcon size={25} color="#4a69bd" className="cursor-pointer" />
        </Tooltip>
        {/* Delete Icon */}
        <Tooltip content="delete">
          <DeleteIcon
            onClick={() => deleteSubscriberHandler(id)}
            size={25}
            color="#b71540"
            className="cursor-pointer"
          />
        </Tooltip>
        {/* Copy Icon */}
        <Tooltip content="copy">
          <CopyIcon
            onClick={() => copyEmailItemHanlder(newsEmail)}
            size={25}
            className="text-[#2ed573] cursor-pointer"
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default CollectionEmailList;
