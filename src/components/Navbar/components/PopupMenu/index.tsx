import React from "react";
import defaultAvt from "../../../../assets/images/avtImg.png";
import { logout } from "../../../../redux/auth/authSlice";
import { useAppDispatch } from "../../../../redux/hook";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  UserInfo,
  Avatar,
  Info,
  Email,
  Name,
} from "./styles";

const PopupMenu = () => {
  const dispatch = useAppDispatch();
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };
  return (
    <Container>
      <UserInfo>
        <Avatar src={defaultAvt} alt="avatar" />
        <Info>
          <Email>quyenptt03@gmail.com</Email>
          <Name>Quyen Phan</Name>
        </Info>
      </UserInfo>
      <Menu>
        <MenuItem>
          <MenuItemLink href="/your-profile">Your profile</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>Wish list</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>Change password</MenuItemLink>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </Container>
  );
};
export default PopupMenu;
