import Activity from "../../../../components/Activity";
import data from "../../../../data/activities.json";
import { Container, ItemContainer } from "./styles";

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
