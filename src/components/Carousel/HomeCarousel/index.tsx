import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location-icon.svg";
import { ReactComponent as NextIcon } from "../../../assets/icons/next-icon2.svg";
import { ReactComponent as PrevIcon } from "../../../assets/icons/prev-icon2.svg";
import home1 from "../../../assets/images/home-1.png";
import home2 from "../../../assets/images/home-2.png";
import home3 from "../../../assets/images/home3.png";
import home4 from "../../../assets/images/home4.png";
import {
  ArrowBtns,
  Container,
  CurrentSlideNumber,
  CustomDot,
  CustomDotsContainer,
  DotsList,
  FeaturedLocationCard,
  FeaturedLocations,
  HomeContainer,
  IconContainer,
  Image,
  LocationCardBg,
  LocationIconContainer,
  LocationSeeMore,
  LocationTitle,
  LocationTitleWrapper,
  SeeMoreBtn,
  SeeMoreSpan,
  SeeMoreTitle,
  Slash,
  SlideNumberContainer,
  SubTitle,
  Title,
  TotalSlideNumber,
  WrapTitle,
} from "./styles";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const HomeCarousel = () => {
  const { t } = useTranslation("home");

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
              <SubTitle>{t("hero image.explore")}</SubTitle>
              <Title>{t("hero image.Dalat")}</Title>
            </WrapTitle>
            <FeaturedLocations>
              <FeaturedLocationCard>
                <LocationCardBg />
                <LocationIconContainer>
                  <LocationIcon />
                </LocationIconContainer>
                <LocationTitleWrapper>
                  <LocationTitle>
                    {t("hero image.Tuyen Lam lake")}
                  </LocationTitle>
                  <LocationSeeMore href="/destinations/646845f80c759a65d4fcf817">
                    {t("hero image.read more")}
                  </LocationSeeMore>
                </LocationTitleWrapper>
              </FeaturedLocationCard>
              <FeaturedLocationCard>
                <LocationCardBg />
                <LocationIconContainer>
                  <LocationIcon />
                </LocationIconContainer>
                <LocationTitleWrapper>
                  <LocationTitle>{t("hero image.love valley")}</LocationTitle>
                  <LocationSeeMore href="/destinations/646845f80c759a65d4fcf818">
                    {t("hero image.read more")}
                  </LocationSeeMore>
                </LocationTitleWrapper>
              </FeaturedLocationCard>
              <FeaturedLocationCard>
                <LocationCardBg />
                <LocationIconContainer>
                  <LocationIcon />
                </LocationIconContainer>
                <LocationTitleWrapper>
                  <LocationTitle>
                    {t("hero image.Langbiang mountain")}
                  </LocationTitle>
                  <LocationSeeMore href="/destinations/646845f80c759a65d4fcf815">
                    {t("hero image.read more")}
                  </LocationSeeMore>
                </LocationTitleWrapper>
              </FeaturedLocationCard>
            </FeaturedLocations>
            <Image src={image} alt={"home slide " + index} loading="lazy" />
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
        <SeeMoreTitle>{t("hero image.see more")}</SeeMoreTitle>
      </SeeMoreBtn>
    </Container>
  );
};

export default HomeCarousel;
