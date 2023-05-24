import React from "react";
import { ImagesCarousel } from "../../../../components/Carousel";
import Description from "../Description";
import { useAppSelector } from "../../../../redux/hook";
import { Container, Images, PlaceDescription } from "./styles";
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
