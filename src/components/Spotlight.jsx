import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spotlight = (props) => {
  return (
    <div class="p-3 mb-5 ml-2 relative flex flex-col mt-6 text-gray-700 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-clip-border w-[225px] dark:bg-[#3d3d3d]">
      <div class=" text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={props.img}
          alt="card-image"
          className="h-[350px] w-full  object-cover"
        />
      </div>
      <div className="text-3xl text-gray-400 font-extralight tracking-widest text-center">-----------------</div>
      <div class="">
        <p class="text-center text-[18px] font-semibold text-gray-950 dark:text-white">
          {props.title}
        </p>
        <p class="text-center text-black text-base mt-2 dark:text-slate-50">
          {props.time}
        </p>
        <p class="text-base text-gray-600 text-center mt-2 dark:text-slate-100">
          {props.venue}
        </p>
        <div className="flex items-center justify-center mt-2">
          <button className="text-white text-sm bg-gray-950  m-auto w-full p-2">
            {props.btnData}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
