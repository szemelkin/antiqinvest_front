import React from "react";
import Slider2 from "react-slick";
import SliderCardTraider from "./SliderCardTraider";



import buttonRight from "../../../assets/images/button-right.png";
import buttonLeft from "../../../assets/images/button-left.png";

import clock from "../../../assets/images/slider-image1920.png";
import tableware from "../../../assets/images/tableware.png";
import gramophone from "../../../assets/images/gramophone.png";

export function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="btn-left" style={{ ...style }} onClick={onClick}>
      <img src={buttonRight} />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="btn-right" style={{ ...style }} onClick={onClick}>
      <img src={buttonLeft} />
    </div>
  );
}

export default function SimpleSliderTraider() {
  const sliderData = [
    {
      img: clock,
    },
    {
      img: tableware,
    },
    {
      img: gramophone,
    },
    {
      img: clock,
    },
    {
      img: tableware,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      ,
    ],
  };
  return (
    <>
      <Slider2 {...settings}>
        {sliderData.map((item, index) => {
          return (
            <SliderCardTraider
              img={item.img}
            />
          );
        })}
      </Slider2>


    </>
  );
}
