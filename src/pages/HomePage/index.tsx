import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import {
  ActivitiesCarousel,
  PostsCarousel,
  HomeCarousel,
} from "../../components/Carousel";

const PageContainer = styled.div`
  ${tw``}
`;
const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <HomeCarousel />
      <ActivitiesCarousel />
      <PostsCarousel />
    </PageContainer>
  );
};

export default HomePage;
