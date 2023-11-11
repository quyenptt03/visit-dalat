import React from "react";
import { IconButton } from "../Button";
import StarRatings from "react-star-ratings";

import {
  Container,
  ImageContainer,
  Image,
  Title,
  ButtonContainer,
} from "./styles";
import { Link } from "react-router-dom";

interface IHotelProps {
  imgSrc: string;
  title: string;
  star: number;
}

const HotelCard = (props: IHotelProps) => {
  const { imgSrc, title, star } = props;
  return (
    <Container as={Link} to={"/destinations/646845f80c759a65d4fcf81c"}>
      <ImageContainer>
        <Image src={imgSrc} alt="hotel" loading="lazy" />
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
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
