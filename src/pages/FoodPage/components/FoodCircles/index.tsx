import tw from "twin.macro";
import styled from "styled-components";
import Slider from "react-slick";
import FoodCircle from "../FoodCircle";
import data from "../../../../data/foods.json";

const Container = styled.div`
  ${tw` mx-0 3xl:mx-52 2xl:mx-28 laptop:mx-2`}
`;

const FoodCircles = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        {data.foodCircles.map((item) => (
          <FoodCircle key={item.id} title={item.title} img={item.imgSrc} />
        ))}
      </Slider>
    </Container>
  );
};

export default FoodCircles;
