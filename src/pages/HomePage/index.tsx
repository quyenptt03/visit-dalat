import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import {
  TopSection,
  PostsSection,
  PlacesSection,
  ActivitiesSection,
  FoodsSection,
  MoreInfoSection,
  HotelsSection,
} from "./components/Sections";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";

const PageContainer = styled.div`
  ${tw``}
`;
const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <TopSection />
        <PostsSection />
        <PlacesSection />
        <ActivitiesSection />
        <MoreInfoSection />
        <FoodsSection />
        <HotelsSection />
      </PageContainer>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default HomePage;
