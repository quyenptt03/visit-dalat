import React, { useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import places1 from "../../../assets/places/places1.png";
import img2 from "../../../assets/images/place1.png";
import img3 from "../../../assets/images/place2.png";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const Container = styled.div`
  ${tw`w-full h-full `}
`;
const Image = styled.img`
  ${tw`object-cover w-full h-[80vh] `}
`;

const ImagesCarousel = () => {
  const images = [places1, img2, img3, places1, img2];
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
        {images.map((image, index) => {
          return <Image src={image} key={index} />;
        })}
      </Slider>
    </Container>
  );
};

export default ImagesCarousel;
