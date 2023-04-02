import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SaveIcon } from "../../../assets/icons/save-icon.svg";
import { ReactComponent as NextIcon } from "../../../assets/icons/next-icon.svg";
import { ReactComponent as PrevIcon } from "../../../assets/icons/prev-icon.svg";

interface IButtonProps {
  type: "nextBtn" | "prevBtn" | "saveBtn";
}

const ButtonContainer = styled.button`
  ${tw`flex items-center justify-center w-12 h-12 transition-all duration-100 ease-linear bg-light-blue hover:bg-baby-blue `}
`;

const SwiperButton = styled(ButtonContainer)`
  ${tw`rounded-lg`}
`;

const SaveButton = styled(ButtonContainer)`
  ${tw`rounded-tl-lg rounded-br-lg`}
`;

const IconContainer = styled.div`
  ${tw` text-green`}
  svg {
    stroke: #1d764a;
  }
`;

const IconButton = (props: IButtonProps) => {
  const { type } = props;
  if (type === "saveBtn")
    return (
      <SaveButton>
        <IconContainer>
          <SaveIcon />
        </IconContainer>
      </SaveButton>
    );
  else if (type === "nextBtn")
    return (
      <SwiperButton>
        <IconContainer>
          <NextIcon />
        </IconContainer>
      </SwiperButton>
    );
  else
    return (
      <SwiperButton>
        <IconContainer>
          <PrevIcon />
        </IconContainer>
      </SwiperButton>
    );
};

export default IconButton;
