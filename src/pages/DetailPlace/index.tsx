import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
import Details from "./components/Details";
import Map from "./components/Map";
import Reviews from "./components/Reviews";
import { SectionMarginer } from "../../components/Marginer";
const PageContainer = styled.div`
  ${tw`mt-24`}
`;
const DetailPlace = () => {
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
