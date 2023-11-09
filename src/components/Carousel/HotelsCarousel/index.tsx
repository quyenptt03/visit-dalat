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
  Button,
  ButtonText,
  ForwardIconContainer,
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hotel1 from "../../../assets/hotels/hotel1.png";
import Hotel2 from "../../../assets/hotels/hotel2.png";
import Hotel3 from "../../../assets/hotels/hotel3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import defaultData from "../../../data/places-to-stay.json";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

interface IHotelProps {
  title: string;
  rating: number;
  images: Array<string>;
}

interface IHotelCarouselProps {
  hotelsInfo?: Array<IHotelProps>;
  showSeeMoreBtn: boolean;
}

const HotelsCarousel = (props: IHotelCarouselProps) => {
  const { showSeeMoreBtn, hotelsInfo } = props;
  const infos = hotelsInfo ? hotelsInfo : defaultData.hotels;
  const { t } = useTranslation("home");
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

    if (currentSlide === infos.length - 3) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  };

  return (
    <CarouselContainer>
      {showSeeMoreBtn && (
        <Button as={Link} to={"/destinations/places-to-stay"}>
          <ButtonText>{t("places to stay.see more")}</ButtonText>
          <ForwardIconContainer />
        </Button>
      )}
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
          {infos.map((info: IHotelProps) => (
            <ItemContainer>
              <HotelCard
                imgSrc={info.images[0]}
                title={info.title}
                star={info.rating}
              />
            </ItemContainer>
          ))}
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default HotelsCarousel;
