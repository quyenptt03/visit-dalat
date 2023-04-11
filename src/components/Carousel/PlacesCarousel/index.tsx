import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import tw from "twin.macro";
import Place from "./components/Place";
import { IconButton } from "../../Button";
import place1 from "../../../assets/images/place1.png";
import map from "../../../assets/icons/dalat-map.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const CarouselContainer = styled.div`
  ${tw`relative`}
`;
const SwiperBtns = styled.div`
  ${tw`flex absolute right-[132px] bottom-32 z-[1]`}
`;
const NextButtonContainer = styled.div`
  ${tw`ml-5`}
`;

const PlacesCarousel = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <Slider ref={slide} {...settings} afterChange={handleAfterChange}>
        <Place
          title="Thành Phố Đà Lạt"
          p="Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo, hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp tục cuộn ngang để tìm hiểu thêm."
          imageAdr={place1}
          showBtn={true}
          mapImg={map}
        />
        <Place
          title="Thành Phố Đà Lạt"
          p="Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo, hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp tục cuộn ngang để tìm hiểu thêm."
          imageAdr={place1}
          showBtn={true}
          mapImg={map}
        />
        <Place
          title="Thành Phố Đà Lạt"
          p="Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo, hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp tục cuộn ngang để tìm hiểu thêm."
          imageAdr={place1}
          showBtn={true}
          mapImg={map}
        />
        <Place
          title="Thành Phố Đà Lạt"
          p="Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo, hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp tục cuộn ngang để tìm hiểu thêm."
          imageAdr={place1}
          showBtn={true}
          mapImg={map}
        />
        <Place
          title="Thành Phố Đà Lạt"
          p="Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo, hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp tục cuộn ngang để tìm hiểu thêm."
          imageAdr={place1}
          showBtn={true}
          mapImg={map}
        />
        <Place
          title="Thành Phố Đà Lạt"
          p="Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo, hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp tục cuộn ngang để tìm hiểu thêm."
          imageAdr={place1}
          showBtn={true}
          mapImg={map}
        />
      </Slider>
    </CarouselContainer>
  );
};

export default PlacesCarousel;
