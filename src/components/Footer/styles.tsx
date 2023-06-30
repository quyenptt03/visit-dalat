import tw from "twin.macro";
import styled from "styled-components";
const Container = styled.div`
  ${tw`laptop:h-96 xxl:h-[474px] bg-dark-green`};
`;
const Content = styled.div`
  ${tw`xxl:px-[8.25rem] xxl:pt-[5.25rem] laptop:px-24 laptop:pt-16 pt-1 tablet:mb-0`}
`;
const Title = styled.h4`
  ${tw`mt-3 mb-3 font-semibold text-white capitalize xxl:mb-6 xxl:text-lg laptop:mb-5 laptop:text-base laptop:mt-0`}
`;
const Row2 = styled.div`
  ${tw`grid grid-cols-4 pl-4 mt-3 xxl:mt-12 laptop:mt-10 laptop:pl-0`}
`;
const WorkWithUs = styled.div`
  ${tw`col-span-4 laptop:col-span-1`}
`;

const WorkWithUsList = styled.ul``;
const WorkWithUsItem = styled.li`
  ${tw`mb-2`}
  a {
    ${tw`font-medium text-white capitalize xxl:text-lg laptop:text-sm`}
  }
`;
const Connect = styled.div`
  ${tw`col-span-4 laptop:col-span-3`}
`;
const ConnectList = styled.ul`
  ${tw`flex flex-wrap`}
`;
const ConnectItem = styled.li`
  ${tw`mb-2 mr-8`}
  a {
    ${tw`text-white transition-all duration-100 ease-linear hover:text-primary`}
  }
`;
const Row3 = styled.div`
  ${tw`grid grid-cols-12 mt-5 ml-4 laptop:mt-12 laptop:ml-0`}
`;
const Copyright = styled.span`
  ${tw`col-span-12 mt-6 mb-5 font-normal text-white laptop:col-span-3 xxl:text-base laptop:text-xs laptop:my-0`}
`;
const LegalInfo = styled.ul`
  ${tw`flex flex-col col-span-12 laptop:col-span-9 laptop:flex-row row-[1] laptop:row-auto`}
`;
const LegalInfoItem = styled.li`
  ${tw`mr-10`}
  a {
    ${tw`font-medium text-white xxl:text-base laptop:text-sm`}
  }
`;
// const LanguageContainer = styled.div`
//   ${tw`flex justify-end col-span-6 laptop:col-span-2 laptop:text-sm`}
// `;
// const Language = styled.select`
//   ${tw`text-white bg-transparent outline-none appearance-none cursor-pointer`}
// `;
// const LanguageOptions = styled.option`
//   ${tw`text-base font-normal text-white laptop:text-2xl`}
// `;
// const LanguageLabel = styled.label`
//   ${tw`mr-3 text-white`}
// `;

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
  // LanguageContainer,
  // Language,
  // LanguageOptions,
  // LanguageLabel,
};
