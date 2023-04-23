import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import {
  TopSection,
  PostsSection,
  PlacesSection,
  ActivitiesSection,
  FoodsSection,
  MoreInfoSection,
  HotelsSection,
} from "./components/Sections";
import Footer from "../../components/Footer";

const PageContainer = styled.div`
  ${tw``}
`;
const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <PostsSection />
      <PlacesSection />
      <ActivitiesSection />
      <MoreInfoSection />
      <FoodsSection />
      <HotelsSection />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
