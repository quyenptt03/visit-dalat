import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { URL } from "../../../api/axiosClient";

import { getFeaturedDestinations } from "../../../redux/destination/actions";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { IconButton } from "../../Button";
import Place from "./components/Place";

import map from "../../../assets/icons/dalat-map.svg";
import place1 from "../../../assets/images/place1.png";

import { useTranslation } from "react-i18next";
import { CarouselContainer, NextButtonContainer, SwiperBtns } from "./styles";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const PlacesCarousel = () => {
  const { t } = useTranslation("home");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFeaturedDestinations());
  }, [dispatch]);

  const { destinations } = useAppSelector(
    (state) => state.featuredDestinations
  );
  let count: number = 3;
  if (destinations) count = destinations.length;

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
          field={t("featured destinations.destinations")}
          title={t("featured destinations.Dalat city")}
          p={t("featured destinations.description")}
          imageAdr={place1}
          showBtn={false}
          mapImg={map}
        />
        {destinations?.map((destination) => {
          return (
            <Place
              key={destination._id}
              field={t("featured destinations.destinations")}
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
