import React, { useState } from "react";
import Sport from "./components/Sport";
import Ad from "./components/Ad";
import data from "./components/SportData";
import Spotlight from "./components/Spotlight";
import Sdata from "./components/SpotData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./components/slider/CustomSlider";
import { useEffect } from "react";
const App = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [light,setLight]=useState(true)

  const handleToggle=(e)=>{
    setLight(!light)
  }
  useEffect(() => {
    if(light){
      document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add("light");
    }
    else{
      document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add("dark");
    }
    
  }, [light]);


  return (
    <>
      <div className="border  bg-gray-50 dark:bg-[#1e2025]">
      <div className="sticky top-0  z-50 p-4 flex justify-end mt-2">
          <label className="inline-flex items-center cursor-pointer mr-16">
            <input type="checkbox" value="" className="sr-only peer" onChange={handleToggle} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="text-4xl font-medium  ml-44 mb-10">
          <span className="border-b-4 border-blue-500 pb-2 dark:text-white">
            Sports
          </span>
        </div>
        <div className="w-5/6 m-auto b flex-col items-center justify-center">
          <div className="flex justify-center gap-3">
            {data.map((info, index) => (
              <Sport
                key={index}
                img={info.img}
                title={info.desc}
                totalEvents={info.totalEvents}
                sport={info.sport}
              />
            ))}
            <Ad />
          </div>
          <div className="w-44 m-auto  flex items-center justify-center mt-10 ">
            <button class="bg-blue-500  hover:bg-blue-700 text-white font-normal py-2 px-5 rounded shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              See More
            </button>
          </div>
          <div className=" h-auto w-[1000px] m-auto mt-16 flex-col items-center justify-center dark:bg-gradient-to-b from-[#131a10] via-[#2e1c2d] to-[#240b27] h-auto">
            <div className="mt-5 w-5/6 m-auto ">
              <h1 className="text-5xl font-medium from-slate-950 text-center mt-8 pt-8 dark:text-white">
                Collection Spotlight
              </h1>
              <p className="text-center mt-4 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                numquam odio ex ipsam ipsum rerum, est porro, consequatur maxime
                distinctio, temporibus nam? Vel unde ipsa repellendus eaque
                debitis alias laborum?
              </p>
            </div>
            <div className=" mt-8 mb-14 w-3/4 m-auto flex-col items-center justify-center ">
              <CustomSlider settings={settings}>
                {Sdata.map((value, index) => (
                  <Spotlight
                    img={value.img}
                    title={value.title}
                    time={value.time}
                    venue={value.venue}
                    btnData={value.btnData}
                  />
                ))}
              </CustomSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
