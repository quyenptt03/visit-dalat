import React from "react";
import { SectionMargin } from "./styles";

interface IMarginerProps {
  children: React.ReactNode;
  background?: boolean;
}

const SectionMarginer = (props: IMarginerProps) => {
  const { children, background } = props;
  return <SectionMargin background={background}>{children}</SectionMargin>;
};

export { SectionMarginer };
