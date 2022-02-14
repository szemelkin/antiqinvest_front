import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";


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

export default function SimpleSlider() {
  const sliderData = [
    {
      img: clock,
      lot: "Антикварные часы",
      capital: "75 000",
      profit: "10 000",
    },
    {
      img: tableware,
      lot: "Антикварный набор посуды",
      capital: "75 000",
      profit: "10 000",
    },
    {
      img: gramophone,
      lot: "Граммофон 1950го года",
      capital: "75 000",
      profit: "10 000",
    },
    {
      img: clock,
      lot: "Антикварные часы",
      capital: "75 000",
      profit: "10 000",
    },
    {
      img: tableware,
      lot: "Антикварный набор посуды",
      capital: "75 000",
      profit: "10 000",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          vertical: true,
          verticalSwiping: true,
        },
      },
      ,
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {sliderData.map((item, index) => {
          return (
            <SliderCard
              key={index}
              img={item.img}
              lot={item.lot}
              capital={item.capital}
              profit={item.profit}
            />
          );
        })}
      </Slider>
    </>
  );
}
