import React, { useEffect } from "react";
import { useAppSelector } from "../../../../redux/hook";
import { useAppDispatch } from "../../../../redux/hook";
import { getAllDestinations } from "../../../../redux/destination/actions";
import Post from "../../../../components/Post";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`grid grid-cols-12 mx-11`}
`;
const List = styled.div`
  ${tw` col-span-8 col-start-3 grid grid-cols-3 gap-7`}
`;
const ListCol = styled.div`
  ${tw``}
`;
const DestinationsList = () => {
  const { destinations, isLoading } = useAppSelector(
    (state) => state.destinations
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllDestinations());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Container>
          <List>
            <ListCol>
              {destinations?.map(
                (destination, index) =>
                  index % 3 === 0 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      data={destination}
                      key={destination._id}
                    />
                  )
              )}
            </ListCol>
            <ListCol>
              {destinations?.map(
                (destination, index) =>
                  index % 3 === 1 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      data={destination}
                      key={destination._id}
                    />
                  )
              )}
            </ListCol>
            <ListCol>
              {destinations?.map(
                (destination, index) =>
                  index % 3 === 2 && (
                    <Post
                      size={index % 2 === 0 ? "short" : "high"}
                      data={destination}
                      key={destination._id}
                    />
                  )
              )}
            </ListCol>
          </List>
        </Container>
      )}
    </>
  );
};

export default DestinationsList;
