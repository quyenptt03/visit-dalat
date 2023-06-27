import React, { CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";
const override: CSSProperties = {
  display: "block",
  margin: "3rem auto",
};

const Loading = (props: { loading: boolean }) => {
  return (
    <>
      <CircleLoader
        color={"#1d764a"}
        loading={props.loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loading;
