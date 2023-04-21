import tw from "twin.macro";
import styled from "styled-components";
import footerImg from "../../assets/images/footerImg.png";

const Container = styled.div`
  background: url(${footerImg});
  height: 474px;
  ${tw``}; ;
`;
const Content = styled.div`
  ${tw`px-[8.25rem] pt-[5.25rem]`}
`;
const Title = styled.h4`
  ${tw`text-lg font-semibold text-white capitalize mb-6`}
`;
const Row2 = styled.div`
  ${tw`grid mt-12 grid-cols-4`}
`;
const WorkWithUs = styled.div`
  ${tw`col-span-1`}
`;

const WorkWithUsList = styled.ul``;
const WorkWithUsItem = styled.li`
  ${tw`mb-2`}
  a {
    ${tw`text-lg font-medium text-white capitalize`}
  }
`;
const Connect = styled.div`
  ${tw`col-span-3`}
`;
const ConnectList = styled.ul`
  ${tw`flex`}
`;
const ConnectItem = styled.li`
  ${tw`mr-8`}
  a {
    ${tw`text-white`}
  }
`;
const Row3 = styled.div`
  ${tw`grid grid-cols-12 mt-12`}
`;
const Copyright = styled.span`
  ${tw`text-base font-normal text-white col-span-3`}
`;
const LegalInfo = styled.ul`
  ${tw`flex col-span-7`}
`;
const LegalInfoItem = styled.li`
  ${tw`mr-10`}
  a {
    ${tw`text-base font-normal text-white `}
  }
`;
const LanguageContainer = styled.div`
  ${tw`flex col-span-2 justify-end`}
`;
const Language = styled.select`
  ${tw`bg-transparent text-white appearance-none outline-none cursor-pointer`}
`;
const LanguageOptions = styled.option`
  ${tw`text-base font-normal text-white `}
`;
const LanguageLabel = styled.label`
  ${tw`mr-3 text-white`}
`;

export {
  Container,
  Content,
  Title,
  Row2,
  WorkWithUs,
  WorkWithUsList,
  WorkWithUsItem,
  Connect,
  ConnectItem,
  ConnectList,
  Row3,
  Copyright,
  LegalInfo,
  LegalInfoItem,
  LanguageContainer,
  Language,
  LanguageOptions,
  LanguageLabel,
};
