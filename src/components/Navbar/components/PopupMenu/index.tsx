import React from "react";
import defaultAvt from "../../../../assets/images/avtImg.png";
import { logout } from "../../../../redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
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
import { useTranslation } from "react-i18next";

const PopupMenu = () => {
  const { t } = useTranslation("user");
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.current);

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <Container>
      <UserInfo>
        <Avatar src={defaultAvt} alt="avatar" />
        <Info>
          <Email>{currentUser.email}</Email>
          <Name>{currentUser.name}</Name>
        </Info>
      </UserInfo>
      <Menu>
        <MenuItem>
          <MenuItemLink href="/your-profile">{t("your profile")}</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>{t("change password")}</MenuItemLink>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>{t("logout")}</MenuItem>
      </Menu>
    </Container>
  );
};
export default PopupMenu;
