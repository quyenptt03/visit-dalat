import React from "react";
import StarRatings from "react-star-ratings";

import { Container, ImageContainer, Image, Title } from "./styles";

interface IHotelProps {
  imgSrc: string;
  title: string;
  star: number;
}

const HotelCard = (props: IHotelProps) => {
  const { imgSrc, title, star } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={imgSrc} alt="hotel" />
      </ImageContainer>
      <Title>{title}</Title>
      <StarRatings
        rating={star}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="#FF9921"
      />
    </Container>
  );
};

export default HotelCard;
