import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import { PostsCarousel } from "../../components/Carousel";

const PageContainer = styled.div`
  ${tw``}
`;
const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  );
};

export default HomePage;
