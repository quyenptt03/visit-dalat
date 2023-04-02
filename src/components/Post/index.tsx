import React from "react";
import {
  PostContainer,
  BasePostImage,
  ButtonContainer,
  ImageContainer,
  PostDescription,
  PostTitle,
} from "./styles";
import postImg from "../../assets/images/post1.png";
import { IconButton } from "../Button";

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
