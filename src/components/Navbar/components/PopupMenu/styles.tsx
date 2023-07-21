import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`absolute right-0 py-5 border-slate-300 border-solid border-[1px] bg-secondary rounded-lg min-w-[300px] text-black`}
`;
const Menu = styled.ul`
  ${tw`mt-4 border-t-[1px] border-slate-300 border-solid`}
`;
const MenuItem = styled.li`
  ${tw`py-3 hover:bg-white w-full px-5 text-black hover:text-primary font-medium hover:cursor-pointer`}
`;
const MenuItemLink = styled.a`
  ${tw``}
`;
const UserInfo = styled.div`
  ${tw`flex items-center justify-center px-5`}
`;
const Avatar = styled.img`
  ${tw`rounded-full w-9 h-9`}
`;
const Info = styled.div`
  ${tw`ml-3 `}
`;
const Email = styled.span`
  ${tw`block font-medium `}
`;
const Name = styled.span`
  ${tw`text-sm text-dark-gray`}
`;

export {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  UserInfo,
  Avatar,
  Info,
  Email,
  Name,
};
