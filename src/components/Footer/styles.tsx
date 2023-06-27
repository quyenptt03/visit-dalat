import tw from "twin.macro";
import styled from "styled-components";
import footerImg from "../../assets/images/footerImg.png";

const Container = styled.div`
  background: url(${footerImg});
  ${tw`laptop:h-96 xxl:h-[474px]`};
`;
const Content = styled.div`
  ${tw`xxl:px-[8.25rem] xxl:pt-[5.25rem] laptop:px-24 laptop:pt-16`}
`;
const Title = styled.h4`
  ${tw`font-semibold text-white capitalize xxl:mb-6 xxl:text-lg laptop:mb-5 laptop:text-base`}
`;
const Row2 = styled.div`
  ${tw`grid grid-cols-4 xxl:mt-12 laptop:mt-10`}
`;
const WorkWithUs = styled.div`
  ${tw`col-span-1`}
`;

const WorkWithUsList = styled.ul``;
const WorkWithUsItem = styled.li`
  ${tw`mb-2`}
  a {
    ${tw`font-medium text-white capitalize xxl:text-lg laptop:text-sm`}
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
    ${tw`text-white transition-all duration-100 ease-linear hover:text-primary`}
  }
`;
const Row3 = styled.div`
  ${tw`grid grid-cols-12 mt-12`}
`;
const Copyright = styled.span`
  ${tw`col-span-3 font-normal text-white xxl:text-base laptop:text-xs`}
`;
const LegalInfo = styled.ul`
  ${tw`flex col-span-7`}
`;
const LegalInfoItem = styled.li`
  ${tw`mr-10`}
  a {
    ${tw`font-normal text-white xxl:text-base laptop:text-sm`}
  }
`;
const LanguageContainer = styled.div`
  ${tw`flex justify-end col-span-2 laptop:text-sm`}
`;
const Language = styled.select`
  ${tw`text-white bg-transparent outline-none appearance-none cursor-pointer`}
`;
const LanguageOptions = styled.option`
  ${tw`text-base font-normal text-white laptop:text-2xl`}
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
