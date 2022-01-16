import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import "./SliderCard.css";
import img from "../../../assets/images/slider-image1920.png";
import buttonRight from "../../../assets/images/button-right.png";
import buttonLeft from "../../../assets/images/button-left.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "absolute", top: "-60px" }}
      onClick={onClick}
    >
      <img src={buttonRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "absolute", top: "-60px"}}
      onClick={onClick}
    >
      <img src={buttonLeft} />
    </div>
  );
}

export default class SimpleSlider extends Component {
  render() {
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
      <div>

        <Slider {...settings}>
          <div className="a">
            <div className="ss">
              <img src={img} />
              <div className="Slider__card-main">
                <h3>Антикварные часы</h3>
                <div className="Slider__card-block">
                  <div className="Slider__card-main-text">
                    <h3>Инвестиции</h3>
                    <h4>75 000 ₽</h4>
                  </div>
                  <div className="Slider__card-main-text">
                    <h3>Доходность</h3>
                    <h4>10 000 ₽</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="a">
            <div className="ss">
              <img src={img} />
              <div className="Slider__card-main">
                <h3>Антикварные часы</h3>
                <div className="Slider__card-block">
                  <div className="Slider__card-main-text">
                    <h3>Инвестиции</h3>
                    <h4>75 000 ₽</h4>
                  </div>
                  <div className="Slider__card-main-text">
                    <h3>Доходность</h3>
                    <h4>10 000 ₽</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="a">
            <div className="ss">
              <img src={img} />
              <div className="Slider__card-main">
                <h3>Антикварные часы</h3>
                <div className="Slider__card-block">
                  <div className="Slider__card-main-text">
                    <h3>Инвестиции</h3>
                    <h4>75 000 ₽</h4>
                  </div>
                  <div className="Slider__card-main-text">
                    <h3>Доходность</h3>
                    <h4>10 000 ₽</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="a">
            <div className="ss">
              <img src={img} />
              <div className="Slider__card-main">
                <h3>Антикварные часы</h3>
                <div className="Slider__card-block">
                  <div className="Slider__card-main-text">
                    <h3>Инвестиции</h3>
                    <h4>75 000 ₽</h4>
                  </div>
                  <div className="Slider__card-main-text">
                    <h3>Доходность</h3>
                    <h4>10 000 ₽</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
