import React from "react";
import { IconButton } from "../Button";
import { URL } from "../../api";

import {
  PostContainer,
  PostImage,
  ButtonContainer,
  ImageContainer,
  PostDescription,
  PostTitle,
} from "./styles";
import { Link } from "react-router-dom";

const Post = (props: any) => {
  const { name, description, images, _id } = props.data;
  const thumbnail = URL + images[0];
  const desc = description.slice(0, 90);
  return (
    <PostContainer as={Link} to={`/destinations/${_id}`}>
      <ImageContainer>
        <PostImage $size={props.size} src={thumbnail} alt="post" />
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
