import React from "react";
import CollectionEmailList from "../components/CollectionEmailList/CollectionEmailList";
import { SlRefresh as RefreshIcon } from "react-icons/sl";
import ErrorUI from "../components/UI/ErrorUI";
import EmptyUI from "../components/UI/EmptyUI";
import CollectionEmailSkleton from "../components/UI/CollectionEmailSkleton";
import { useGetSubscriberQuery } from "../featured/counterApi/counterApi";

function CollectionEmailPage() {
  //  this query for get subscriber list
  const { data, isLoading, isError, refetch } = useGetSubscriberQuery();

  //     decide what to render

  let content = null;

  if (isLoading) {
    content = (
      <>
        <CollectionEmailSkleton />
        <CollectionEmailSkleton />
        <CollectionEmailSkleton />
      </>
    );
  } else if (!isLoading && isError) {
    content = <ErrorUI />;
  } else if (!isLoading && !isError && data?.length > 0) {
    // eslint-disable-next-line react/jsx-key
    content = data?.map((item) => (
      <CollectionEmailList key={item.id} items={item} />
    ));
  } else if (!isLoading && !isError && data?.length == 0) {
    content = <EmptyUI />;
  }

  // refresh handler
  const refreshHandler = () => {
    refetch();
  };

  return (
    <>
      <div className="w-full h-[calc(100vh_-_100px)] p-5 overflow-y-auto scrollbar scrollbar-w-[4px] scrollbar-thumb-[#dff9fb] scrollbar-track-gray-100">
        <div className=" wfull md:w-[90%] md:m-auto lg:w-[80%] lg:m-auto">
          {content}
        </div>
      </div>
      {/* Refresh Icon */}
      <div
        onClick={refreshHandler}
        className="w-[40px] h-[40px] bg-[#ef5777] rounded-full flex justify-center items-center cursor-pointer fixed right-2 bottom-2 "
      >
        <RefreshIcon size={20} color="white" />
      </div>
    </>
  );
}

export default CollectionEmailPage;
