import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = ({ homeRoute }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img src="/assets/404.png" alt="error 404 lost" />
      </div>
      <div>
        <p> Seems you are lost, why not 
        <button style={{borderColor: "#778679", backgroundColor:"#909877", padding: "0.5rem 2rem", borderRadius:"8px", marginLeft:"1rem"}} onClick={() => navigate(homeRoute)}> Go home</button>
        </p></div>
    </div>
  );
};

export default NoMatch;
