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

const PageContainer = styled.div`
  ${tw``}
`;
const HomePage = () => {
  return (
    <PageContainer>
      <TopSection />
      <PostsSection />
      <PlacesSection />
      <ActivitiesSection />
      <MoreInfoSection />
      <FoodsSection />
      <HotelsSection />
    </PageContainer>
  );
};

export default HomePage;
