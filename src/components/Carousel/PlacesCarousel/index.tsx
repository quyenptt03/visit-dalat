import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { URL } from "../../../api";

import { getFeaturedDestinations } from "../../../redux/destination/actions";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { IconButton } from "../../Button";
import Place from "./components/Place";

import map from "../../../assets/icons/dalat-map.svg";
import place1 from "../../../assets/images/place1.png";

import { CarouselContainer, NextButtonContainer, SwiperBtns } from "./styles";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const PlacesCarousel = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFeaturedDestinations());
  }, [dispatch]);

  const { featuredDestinations } = useAppSelector(
    (state) => state.featuredDestinations
  );
  let count: number = 3;
  if (featuredDestinations) count = featuredDestinations.length;

  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const slide = useRef<SliderRef>(null);

  const settings = {
    arrows: false,
    dots: false,
    dotsClass: "custom-dots-slick",
    infinite: false,
    speed: 700,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAfterChange = (currentSlide: number) => {
    if (currentSlide === 0) {
      setDisablePrevBtn(true);
    } else {
      setDisablePrevBtn(false);
    }

    if (currentSlide === count) {
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
      <Slider ref={slide} {...settings} afterChange={handleAfterChange}>
        <Place
          field="Điểm đến"
          title="Thành Phố Đà Lạt"
          p="Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo, hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp tục cuộn ngang để tìm hiểu thêm."
          imageAdr={place1}
          showBtn={false}
          mapImg={map}
        />
        {featuredDestinations?.map((destination) => {
          return (
            <Place
              key={destination._id}
              field="Điểm đến"
              title={destination.name}
              p={`${destination.description.slice(0, 150)}...`}
              imageAdr={URL + destination.images[0]}
              url={`/destinations/${destination._id}`}
              showBtn={true}
            />
          );
        })}
      </Slider>
    </CarouselContainer>
  );
};

export default PlacesCarousel;
