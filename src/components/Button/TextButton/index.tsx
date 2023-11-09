import {
  BlackOutlineButton,
  FilledButton,
  WhiteOutlineButton,
  NoOutlineButton,
} from "./styles";

interface IButtonProps {
  theme: "blackOutlined" | "whiteOutlined" | "filled" | "noOutlined";
  children: any;
}

const TextButton = (props: IButtonProps) => {
  const { theme, children } = props;
  if (theme === "filled") return <FilledButton>{children}</FilledButton>;
  else if (theme === "whiteOutlined")
    return <WhiteOutlineButton>{children}</WhiteOutlineButton>;
  else if (theme === "noOutlined")
    return <NoOutlineButton>{children}</NoOutlineButton>;
  else return <BlackOutlineButton>{children}</BlackOutlineButton>;
};

export default TextButton;
