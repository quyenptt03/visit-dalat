import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Place from "./components/Place";
const CarouselContainer = styled.div`
  ${tw` //`}
`;

const PlacesCarousel = () => {
  return (
    <CarouselContainer>
      <Place></Place>
    </CarouselContainer>
  );
};

export default PlacesCarousel;
