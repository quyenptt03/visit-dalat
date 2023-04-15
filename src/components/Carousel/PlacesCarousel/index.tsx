import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Place from "./components/Place";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IconButton } from "../../Button";
import { CarouselContainer, SwiperBtns, NextButtonContainer } from "./styles";
import place1 from "../../../assets/images/place1.png";
import map from "../../../assets/icons/dalat-map.svg";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const PlacesCarousel = () => {
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
          showBtn={false}
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
