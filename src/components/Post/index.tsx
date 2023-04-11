import React from "react";
import {
  PostContainer,
  BasePostImage,
  ButtonContainer,
  ImageContainer,
  PostDescription,
  PostTitle,
} from "./styles";
// import postImg from "../../assets/images/post1.png";
import { IconButton } from "../Button";

interface IPostProps {
  title: string;
  p: string;
  imgSrc: string;
}

const Post = (props: IPostProps) => {
  const { title, p, imgSrc } = props;
  return (
    <PostContainer>
      <ImageContainer>
        <BasePostImage src={imgSrc} alt="post" />
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
      <PostTitle>{title}</PostTitle>
      <PostDescription>{p}</PostDescription>
    </PostContainer>
  );
};

export default Post;
