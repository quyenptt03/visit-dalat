import React from "react";
import { SaveButton, SwiperButton, IconContainer } from "./styles";
import { ReactComponent as SaveIcon } from "../../../assets/icons/save-icon.svg";
import { ReactComponent as NextIcon } from "../../../assets/icons/next-icon.svg";
import { ReactComponent as PrevIcon } from "../../../assets/icons/prev-icon.svg";

interface IButtonProps {
  type: "nextBtn" | "prevBtn" | "saveBtn";
  onClick?: () => void;
  disabled?: any;
}

const IconButton = (props: IButtonProps) => {
  const { type, onClick, disabled } = props;
  if (type === "saveBtn")
    return (
      <SaveButton onClick={onClick} disabled={disabled}>
        <IconContainer>
          <SaveIcon />
        </IconContainer>
      </SaveButton>
    );
  else if (type === "nextBtn")
    return (
      <SwiperButton onClick={onClick} disabled={disabled}>
        <IconContainer>
          <NextIcon />
        </IconContainer>
      </SwiperButton>
    );
  else
    return (
      <SwiperButton onClick={onClick} disabled={disabled}>
        <IconContainer>
          <PrevIcon />
        </IconContainer>
      </SwiperButton>
    );
};

export default IconButton;
