import React from "react";

const PreLoader = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "#e3e3e3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default PreLoader;
