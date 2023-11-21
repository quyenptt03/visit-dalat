import tw from "twin.macro";
import styled from "styled-components";
import HotelCard from "../../../../components/Hotel";
import data from "../../../../data/activities-articles.json";

const Container = styled.div`
  ${tw`flex flex-wrap mx-40 justify-between`}
`;
const ItemContainer = styled.div`
  ${tw`w-full tablet:w-1/2 3xl:h-[550px] 2xl:h-80 laptop:h-80 px-6 h-56 mb-36`}
`;

const ActivityArticles = () => {
  return (
    <Container>
      {data.map((item) => (
        <ItemContainer>
          <HotelCard title={item.title} imgSrc={item.imgSrc} star={0} />
        </ItemContainer>
      ))}
    </Container>
  );
};

export default ActivityArticles;
