import React, { useEffect } from "react";
import { useAppSelector } from "../../../../redux/hook";
import { useAppDispatch } from "../../../../redux/hook";
import { getAllDestinations } from "../../../../redux/destination/actions";
import Post from "../../../../components/Post";

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
        <div>
          {destinations?.map((destination) => (
            <Post data={destination} key={destination._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default DestinationsList;
