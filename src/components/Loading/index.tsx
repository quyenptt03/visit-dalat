import React, { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Loading = (props: { loading: boolean; color: string; size: number }) => {
  return (
    <>
      <ClipLoader
        color={props.color}
        loading={props.loading}
        cssOverride={override}
        size={props.size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loading;
