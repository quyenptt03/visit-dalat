import React from "react";
import { IconButton } from "../Button";

import {
  PostContainer,
  PostImage,
  ButtonContainer,
  ImageContainer,
  PostDescription,
  PostTitle,
} from "./styles";
import { Link } from "react-router-dom";

interface IPostProps {
  name: string;
  description: string;
  imgSrc: string;
  url?: string;
  size?: string;
}

const Post = (props: IPostProps) => {
  const { name, description, imgSrc, url, size } = props;
  const desc =
    description.length > 90 ? description.slice(0, 90) + "..." : description;
  return (
    <PostContainer as={Link} to={url}>
      <ImageContainer>
        <PostImage $size={size} src={imgSrc} alt="post" />
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
      <PostTitle>{name}</PostTitle>
      <PostDescription>{desc}</PostDescription>
    </PostContainer>
  );
};

export default Post;
