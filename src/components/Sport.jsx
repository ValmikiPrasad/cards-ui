import React from "react";

const Sport = (props) => {
  return (
    <div class="w-[190px]  p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex-col dark:bg-[#30333b] ">
      <img
        src={props.img}
        class="h-[300px] w-full  object-cover"
      />
      <div className=" mt-4 dark:text-white">
        <p class="text-base font-medium mb-3">{props.title}</p>
        <div class="text-sm bg-gray-100 flex gap-6 items-center p-2 mt-2 dark:bg-[#1e2125]">
          <div className="">
            <p class="text-xs text-gray-700 dark:text-white">Total Events</p>
            <p class="text-sm font-normal">{props.totalEvents} Events</p>
          </div>
          <div>
            <p class="text-xs text-gray-700 dark:text-white">Sport</p>
            <p class="text-sm font-normal">{props.sport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;
