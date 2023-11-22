import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`mx-72 mb-5`}
`;
const CommentItem = styled.div`
  ${tw`flex my-4 w-full justify-between`}
`;

const LeftSide = styled.div`
  ${tw`flex`}
`;
const Item = styled.div`
  ${tw`w-16 h-16`}
`;

const Image = styled.img`
  ${tw`object-cover w-full h-full rounded-sm`}
`;
const Content = styled.div`
  ${tw`mx-5`}
`;
const Name = styled.h5`
  ${tw`font-bold text-base`}
`;
const Time = styled.span`
  ${tw`text-gray font-medium text-xs mt-5 mb-0`}
`;
const Comment = styled.p`
  ${tw`font-normal text-black text-base`}
`;
const Button = styled.button`
  ${tw`font-semibold text-black whitespace-nowrap text-sm justify-end`}
`;
const AnsContainer = styled.div`
  ${tw`ml-20`}
`;

export {
  Container,
  CommentItem,
  LeftSide,
  Item,
  Image,
  Content,
  Name,
  Comment,
  Time,
  Button,
  AnsContainer,
};
