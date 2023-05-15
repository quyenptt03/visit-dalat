import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw``}
`;
const Title = styled.h3`
  ${tw`mb-16 text-4xl font-bold text-center`}
`;
const ReviewContainer = styled.div`
  ${tw``}
`;

const Reviews = () => {
  return (
    <Container>
      <Title>Nhận xét và đánh giá</Title>
      <ReviewContainer></ReviewContainer>
    </Container>
  );
};

export default Reviews;
