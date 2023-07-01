import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Activity from "../../Activity";
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

import Activity1 from "../../../assets/images/activity1.png";
import Activity2 from "../../../assets/images/activity2.png";
import Activity3 from "../../../assets/images/activity3.png";
import Activity4 from "../../../assets/images/activity4.png";
import Activity5 from "../../../assets/images/activity5.png";
import Activity6 from "../../../assets/images/activity6.png";
import Activity7 from "../../../assets/images/activity7.png";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const ActivitiesCarousel = () => {
  const activities = [
    {
      image: Activity1,
      title: "Cắm trại",
      subTitle: "132 hoạt động",
    },
    {
      image: Activity2,
      title: "Cáp treo",
      subTitle: "132 hoạt động",
    },
    {
      image: Activity3,
      title: "Leo núi",
      subTitle: "132 hoạt động",
    },
    {
      image: Activity4,
      title: "Vượt thác",
      subTitle: "132 hoạt động",
    },
    {
      image: Activity5,
      title: "Đạp vịt",
      subTitle: "132 hoạt động",
    },
    {
      image: Activity6,
      title: "Săn mây",
      subTitle: "132 hoạt động",
    },
    {
      image: Activity7,
      title: "Zipline",
      subTitle: "132 hoạt động",
    },
  ];

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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
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
          dots: false,
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
          {activities.map((activity, index) => (
            <ItemContainer key={index}>
              <Activity
                image={activity.image}
                title={activity.title}
                subTitle={activity.subTitle}
              />
            </ItemContainer>
          ))}
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default ActivitiesCarousel;
