import Activity from "../../../../components/Activity";
import data from "../../../../data/activities.json";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`flex flex-wrap mx-0 3xl:mx-52 2xl:mx-28 laptop:mx-2`}
`;
const ItemContainer = styled.div`
  ${tw`w-1/4 mb-16`}
`;

const ActivityList = () => {
  // const {data} = props
  return (
    <Container>
      {data.map((activity) => (
        <ItemContainer>
          <Activity
            title={activity.title}
            subTitle={activity.subTitle}
            image={activity.image}
            key={activity.id}
          />
        </ItemContainer>
      ))}
    </Container>
  );
};

export default ActivityList;
