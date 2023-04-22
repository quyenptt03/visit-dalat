import React, { useState } from "react";
import { CaptionContainer, Caption, FoodItem, FoodImg } from "./styles";

interface IFoodProps {
  imageSrc: string;
  caption: string;
}

const Food = (props: IFoodProps) => {
  const { imageSrc, caption } = props;
  const [isHovered, setIsHover] = useState(false);
  return (
    <FoodItem
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <FoodImg src={imageSrc} alt="food" isHovered={isHovered} />
      <CaptionContainer isHovered={isHovered}>
        <Caption>{caption}</Caption>
      </CaptionContainer>
    </FoodItem>
  );
};

export default Food;
