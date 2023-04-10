import React from "react";
import { BlackOutlineButton, FilledButton, WhiteOutlineButton } from "./styles";

interface IButtonProps {
  theme: "blackOutlined" | "whiteOutlined" | "filled";
  children: any;
}

const TextButton = (props: IButtonProps) => {
  const { theme, children } = props;
  if (theme === "filled") return <FilledButton>{children}</FilledButton>;
  else if (theme === "whiteOutlined")
    return <WhiteOutlineButton>{children}</WhiteOutlineButton>;
  else return <BlackOutlineButton>{children}</BlackOutlineButton>;
};

export default TextButton;
