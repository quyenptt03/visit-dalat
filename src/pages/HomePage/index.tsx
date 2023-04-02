import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import Post from "../../components/Post";

const PageContainer = styled.div`
  ${tw``}
`;
const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Post />
    </PageContainer>
  );
};

export default HomePage;
