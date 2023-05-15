import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ImagesCarousel } from "../../../../components/Carousel";
import Description from "../Description";

const Container = styled.div`
  ${tw`flex min-h-[80vh]`}
`;

const PlaceDescription = styled.div`
  ${tw`w-1/2`}
`;
const Images = styled.div`
  ${tw`w-1/2 h-full`}
`;

const Details = () => {
  return (
    <Container>
      <Images>
        <ImagesCarousel />
      </Images>
      <PlaceDescription>
        <Description />
      </PlaceDescription>
    </Container>
  );
};

export default Details;
