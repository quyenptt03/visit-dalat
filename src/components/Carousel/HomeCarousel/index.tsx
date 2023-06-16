import React, { useRef, useState } from "react";
import Slider from "react-slick";
import {
  Container,
  Image,
  HomeContainer,
  WrapTitle,
  SubTitle,
  Title,
  SeeMoreBtn,
  SeeMoreSpan,
  SeeMoreTitle,
  ArrowBtns,
  IconContainer,
  SlideNumberContainer,
  CurrentSlideNumber,
  TotalSlideNumber,
  Slash,
  CustomDotsContainer,
  CustomDot,
  DotsList,
  FeaturedLocations,
  FeaturedLocationCard,
  LocationIconContainer,
  LocationSeeMore,
  LocationTitle,
  LocationTitleWrapper,
  LocationCardBg,
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "../../../assets/images/home-1.png";
import home2 from "../../../assets/images/home-2.png";
import home3 from "../../../assets/images/home3.png";
import home4 from "../../../assets/images/home4.png";
import { ReactComponent as NextIcon } from "../../../assets/icons/next-icon2.svg";
import { ReactComponent as PrevIcon } from "../../../assets/icons/prev-icon2.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location-icon.svg";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const HomeCarousel = () => {
  const images = [home1, home2, home3, home4];
  const slide = useRef<SliderRef>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const settings = {
    arrows: false,
    dots: true,
    dotsClass: "home-custom-dots-slick",
    infinite: true,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <CustomDotsContainer>
        <DotsList>{dots}</DotsList>
      </CustomDotsContainer>
    ),
    customPaging: () => <CustomDot />,
  };

  const handleAfterChange = (currentSlide: number) => {
    setSlideIndex(currentSlide);
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
    <Container>
      <Slider ref={slide} {...settings} afterChange={handleAfterChange}>
        {images.map((image, index) => (
          <HomeContainer key={index}>
            <WrapTitle>
              <SubTitle>Khám phá</SubTitle>
              <Title>Đà Lạt</Title>
            </WrapTitle>
            <FeaturedLocations>
              <FeaturedLocationCard>
                <LocationCardBg />
                <LocationIconContainer>
                  <LocationIcon />
                </LocationIconContainer>
                <LocationTitleWrapper>
                  <LocationTitle>Hồ Tuyền Lâm</LocationTitle>
                  <LocationSeeMore>Tìm hiểu thêm</LocationSeeMore>
                </LocationTitleWrapper>
              </FeaturedLocationCard>
              <FeaturedLocationCard>
                <LocationCardBg />
                <LocationIconContainer>
                  <LocationIcon />
                </LocationIconContainer>
                <LocationTitleWrapper>
                  <LocationTitle>Thung lũng tình yêu</LocationTitle>
                  <LocationSeeMore>Tìm hiểu thêm</LocationSeeMore>
                </LocationTitleWrapper>
              </FeaturedLocationCard>
              <FeaturedLocationCard>
                <LocationCardBg />
                <LocationIconContainer>
                  <LocationIcon />
                </LocationIconContainer>
                <LocationTitleWrapper>
                  <LocationTitle>Núi Langbiang</LocationTitle>
                  <LocationSeeMore>Tìm hiểu thêm</LocationSeeMore>
                </LocationTitleWrapper>
              </FeaturedLocationCard>
            </FeaturedLocations>
            <Image src={image} alt={"home slide " + index} />
          </HomeContainer>
        ))}
      </Slider>
      <SlideNumberContainer>
        <CurrentSlideNumber>0{slideIndex + 1}</CurrentSlideNumber>
        <Slash>/</Slash>
        <TotalSlideNumber>0{images.length}</TotalSlideNumber>
      </SlideNumberContainer>
      <ArrowBtns>
        <IconContainer
          onClick={() => slide?.current?.slickPrev()}
          disabled={disablePrevBtn}
        >
          <PrevIcon />
        </IconContainer>
        <IconContainer
          onClick={() => slide?.current?.slickNext()}
          disabled={disableNextBtn}
        >
          <NextIcon />
        </IconContainer>
      </ArrowBtns>
      <SeeMoreBtn>
        <SeeMoreSpan />
        <SeeMoreTitle>Xem thêm</SeeMoreTitle>
      </SeeMoreBtn>
    </Container>
  );
};

export default HomeCarousel;
