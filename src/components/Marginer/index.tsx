import React from "react";
import { SectionMargin } from "./styles";

interface IMarginerProps {
  children: React.ReactNode;
}

const SectionMarginer = (props: IMarginerProps) => {
  const { children } = props;
  return <SectionMargin>{children}</SectionMargin>;
};

export { SectionMarginer };
