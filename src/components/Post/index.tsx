import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import postImg from "../../assets/images/post1.png";
import { IconButton } from "../Button";

const PostContainer = styled.a`
  ${tw`block mt-20 mb-20 ml-20 w-96`}
`;
const ImageContainer = styled.div`
  ${tw`relative w-full overflow-hidden rounded-t-lg rounded-br-lg cursor-pointer`}
`;
const BasePostImage = styled.img`
  ${tw`w-full transition-all duration-300 ease-linear h-96 hover:transform hover:scale-105 `}
`;
const PostTitle = styled.div`
  ${tw`w-[calc(100%-3rem)] mt-5 mb-1 text-lg font-bold capitalize text-raven-black cursor-pointer `}
`;
const PostDescription = styled.div`
  ${tw`w-[calc(100%-3rem)] text-base font-medium  leading-7 text-gray`}
`;
const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;

const Post = () => {
  return (
    <PostContainer>
      <ImageContainer>
        <BasePostImage src={postImg} alt="post" />
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
      <PostTitle>Top 15 địa điểm săn mây ở Đà Lạt đẹp nhất 2023</PostTitle>
      <PostDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl
        hendrerit, aliquet mi sed, scelerisque tortor. Al
      </PostDescription>
    </PostContainer>
  );
};

export default Post;
