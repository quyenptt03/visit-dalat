import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getFeaturedArticles } from "../../../redux/article/actions";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { IconButton } from "../../Button";
import Post from "../../Post";
import {
  CarouselContainer,
  NextButtonContainer,
  SliderContainer,
  SwiperBtns,
  ItemContainer,
} from "./styles";
import Loading from "../../Loading";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

const PostsCarousel = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFeaturedArticles());
  }, [dispatch]);

  const { isLoading, articles } = useAppSelector(
    (state) => state.featuredArticles
  );
  let count: number = 0;
  if (articles) count = articles.length - 4;

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
          infinite: true,
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

    if (currentSlide === count) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  };

  return (
    <CarouselContainer>
      {isLoading ? (
        <Loading loading={isLoading} color="#1d764a" size={50} />
      ) : (
        <>
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
              {articles?.map((article, index) => (
                <ItemContainer key={article._id}>
                  <Post
                    imgSrc={article.featuredImage}
                    name={article.title}
                    description=""
                    url={`/articles/${article._id}`}
                  />
                </ItemContainer>
              ))}
            </Slider>
          </SliderContainer>
        </>
      )}
    </CarouselContainer>
  );
};

export default PostsCarousel;
