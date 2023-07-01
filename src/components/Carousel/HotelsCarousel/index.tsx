import React, { useRef, useState } from "react";
import Slider from "react-slick";
import HotelCard from "../../Hotel";
import { IconButton } from "../../Button";
import {
  CarouselContainer,
  SliderContainer,
  SwiperBtns,
  NextButtonContainer,
  ItemContainer,
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hotel1 from "../../../assets/hotels/hotel1.png";
import Hotel2 from "../../../assets/hotels/hotel2.png";
import Hotel3 from "../../../assets/hotels/hotel3.png";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const HotelsCarousel = () => {
  const slide = useRef<SliderRef>(null);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const settings = {
    arrows: false,
    dots: false,
    dotsClass: "custom-dots-slick",
    infinite: false,
    speed: 200,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
        },
      },
    ],
  };

  const handleAfterChange = (currentSlide: number) => {
    if (currentSlide === 0) {
      setDisablePrevBtn(true);
    } else {
      setDisablePrevBtn(false);
    }

    if (currentSlide === 3) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  };

  return (
    <CarouselContainer>
      <SwiperBtns>
        <IconButton
          type="prevBtn"
          disabled={disablePrevBtn}
          onClick={() => slide?.current?.slickPrev()}
        />
        <NextButtonContainer>
          <IconButton
            type="nextBtn"
            disabled={disableNextBtn}
            onClick={() => slide?.current?.slickNext()}
          />
        </NextButtonContainer>
      </SwiperBtns>
      <SliderContainer>
        <Slider ref={slide} {...settings} afterChange={handleAfterChange}>
          <ItemContainer>
            <HotelCard
              imgSrc={Hotel1}
              title="Ana Mandara Villas Dalat Resort & Spa"
              star={4.5}
            />
          </ItemContainer>
          <ItemContainer>
            <HotelCard
              imgSrc={Hotel2}
              title="Dalat Palace Heritage Hotel"
              star={4.5}
            />
          </ItemContainer>
          <ItemContainer>
            <HotelCard
              imgSrc={Hotel3}
              title="Terracotta Hotel and Resort Dalat"
              star={4.5}
            />
          </ItemContainer>
          <ItemContainer>
            <HotelCard
              imgSrc={Hotel1}
              title="Ana Mandara Villas Dalat Resort & Spa"
              star={4}
            />
          </ItemContainer>
          <ItemContainer>
            <HotelCard
              imgSrc={Hotel2}
              title="Ana Mandara Villas Dalat Resort & Spa"
              star={3.5}
            />
          </ItemContainer>
          <ItemContainer>
            <HotelCard
              imgSrc={Hotel3}
              title="Ana Mandara Villas Dalat Resort & Spa"
              star={5}
            />
          </ItemContainer>
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default HotelsCarousel;
