import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import { PostsCarousel } from "../../components/Carousel";
import Activity from "../../components/Activity";

const PageContainer = styled.div`
  ${tw``}
`;
const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Activity />
    </PageContainer>
  );
};

export default HomePage;
