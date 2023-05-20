import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Image } from "./styles";
import { URL } from "../../../api";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const ImagesCarousel = (props: any) => {
  const images = props.images;
  const slide = useRef<SliderRef>(null);
  const settings = {
    dots: true,
    arrows: false,
    dotsClass: "custom-dots-slick",
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  function debounce<F extends (...params: any[]) => void>(
    fn: F,
    delay: number
  ) {
    let timeoutID: number;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutID);
      timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
    } as F;
  }
  const onWheelSlider = debounce((e: React.WheelEvent, ref: any) => {
    if (e.deltaY > 0) {
      slide?.current?.slickNext();
    } else if (e.deltaY < 0) {
      slide?.current?.slickPrev();
    }
  }, 20);

  return (
    <Container onWheel={onWheelSlider}>
      <Slider ref={slide} {...settings}>
        {images.map((image: string, index: number) => {
          return <Image src={URL + image} key={index} />;
        })}
      </Slider>
    </Container>
  );
};

export default ImagesCarousel;
