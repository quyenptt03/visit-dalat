import React, { useRef } from "react";
import Slider from "react-slick";
import Post from "../../Post";
import { IconButton } from "../../Button";
import { CarouselContainer, SliderContainer, SwiperBtns } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const PostsCarousel = () => {
  const slide = useRef<SliderRef>(null);

  const settings = {
    arrows: false,
    dots: false,
    dotsClass: "custom-dots-slick",
    infinite: false,
    speed: 200,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // appendDots: (dots: any) => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i: number) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
  };

  return (
    <CarouselContainer>
      <SwiperBtns>
        <IconButton
          type="prevBtn"
          onClick={() => slide?.current?.slickPrev()}
        />
        <IconButton
          type="nextBtn"
          onClick={() => slide?.current?.slickNext()}
        />
      </SwiperBtns>
      <SliderContainer>
        <Slider style={{ width: "100%" }} ref={slide} {...settings}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default PostsCarousel;
