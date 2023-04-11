import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Post from "../../Post";
import { IconButton } from "../../Button";
import {
  CarouselContainer,
  SliderContainer,
  SwiperBtns,
  NextButtonContainer,
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import postImg from "../../../assets/images/post1.png";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const PostsCarousel = () => {
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

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
          <Post
            imgSrc={postImg}
            title="Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu ,"
          />
          <Post
            imgSrc={postImg}
            title="Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu ,"
          />
          <Post
            imgSrc={postImg}
            title="Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu ,"
          />
          <Post
            imgSrc={postImg}
            title="Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu ,"
          />
          <Post
            imgSrc={postImg}
            title="Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu ,"
          />
          <Post
            imgSrc={postImg}
            title="Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu ,"
          />
          <Post
            imgSrc={postImg}
            title="Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu ,"
          />
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default PostsCarousel;
