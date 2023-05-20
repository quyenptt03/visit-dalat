import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ImagesCarousel } from "../../../../components/Carousel";
import Description from "../Description";
import { useAppSelector } from "../../../../redux/hook";

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
  const { isLoading, destination } = useAppSelector(
    (state) => state.destination
  );
  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Container>
          <Images>
            <ImagesCarousel images={destination?.images} />
          </Images>
          <PlaceDescription>
            <Description data={destination} />
          </PlaceDescription>
        </Container>
      )}
    </>
  );
};

export default Details;
