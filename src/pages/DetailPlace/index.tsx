import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
import Details from "./components/Details";
import Map from "./components/Map";
import Reviews from "./components/Reviews";
import { SectionMarginer } from "../../components/Marginer";
import { useAppDispatch } from "../../redux/hook";
import { getSingleDestination } from "../../redux/destination/actions";
import { useLocation } from "react-router-dom";
const PageContainer = styled.div`
  ${tw`mt-24`}
`;
const DetailPlace = () => {
  const location = useLocation();
  const destinationsId = location.pathname.split("/destinations/")[1];

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingleDestination(destinationsId));
  }, [destinationsId, dispatch]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <Details />
        <SectionMarginer>
          <Map />
        </SectionMarginer>
        <SectionMarginer>
          <Reviews />
        </SectionMarginer>
        <Footer />
        <BackToTopButton />
      </PageContainer>
    </>
  );
};

export default DetailPlace;
