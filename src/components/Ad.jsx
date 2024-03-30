import React from "react";

const Ad = () => {
  return (
    <div class="w-[190px]  p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white dark:bg-[#30333b] ">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          className="h-[150px] w-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-black text-white px-3 py-1">
          Ad
        </div>
      </div>
      <div className="p-3 border border-gray-400 dark:border-gray-700">
        <p class="text-base font-medium text-center dark:text-white">Macbook Pro</p>
        <div class="mt-3 text-sm flex gap-5 items-center ">
          <div>
            <p class="text-gray-700 text-sm dark:text-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam similique unde est! Voluptate, iste! m dolor sit amet consectetur adipisicing elit. Corporis aperiam dsderffrg ferttyd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
