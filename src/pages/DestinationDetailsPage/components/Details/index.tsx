import React from "react";
import { ImagesCarousel } from "../../../../components/Carousel";
import Description from "../Description";
import { useAppSelector } from "../../../../redux/hook";
import { Container, Images, PlaceDescription } from "./styles";
import Loading from "../../../../components/Loading";
const Details = () => {
  const { isLoading, destination } = useAppSelector(
    (state) => state.destination
  );
  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} color="#1d764a" size={50} />
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
