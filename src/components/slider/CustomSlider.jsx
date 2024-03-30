import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; // Import custom CSS file for slider styles

const CustomSlider = ({ settings, children }) => {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
