import React from "react";
import { IconButton } from "../Button";
import { URL } from "../../api";

import {
  PostContainer,
  BasePostImage,
  ButtonContainer,
  ImageContainer,
  PostDescription,
  PostTitle,
} from "./styles";

const Post = (props: any) => {
  const { name, description, images } = props.data;
  const thumbnail = URL + images[0];
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
