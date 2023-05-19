import React from "react";
import {
  PostContainer,
  BasePostImage,
  ButtonContainer,
  ImageContainer,
  PostDescription,
  PostTitle,
} from "./styles";
import { IconButton } from "../Button";

const Post = (props: any) => {
  const { name, description, images } = props.data;
  const thumbnail = `http://localhost:5000${images[0]}`;
  console.log({ thumbnail });
  const desc = description.slice(0, 120);
  return (
    <PostContainer>
      <ImageContainer>
        <BasePostImage src={thumbnail} alt="post" />
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
      <PostTitle>{name}</PostTitle>
      <PostDescription>{desc}...</PostDescription>
    </PostContainer>
  );
};

export default Post;
