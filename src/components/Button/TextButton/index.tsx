import React from "react";
import { BlackOutlineButton, FilledButton } from "./styles";

interface IButtonProps {
  theme: "blackOutlined" | "filled";
  children: any;
}

const TextButton = (props: IButtonProps) => {
  const { theme, children } = props;
  if (theme === "filled") return <FilledButton>{children}</FilledButton>;
  else return <BlackOutlineButton>{children}</BlackOutlineButton>;
};

export default TextButton;
