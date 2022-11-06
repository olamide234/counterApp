import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ person }) {
    const navigate = useNavigate();
  return (
    <div>
      <h1>
        {person.firstName.toUppercase()} {person.lastName.toUppercase()}
      </h1>
      <button style={{borderColor: "#778679", backgroundColor:"#909877", padding: "0.5rem 2rem", borderRadius:"8px", marginLeft:"1rem"}} onClick={() => navigate('/')}> Go home</button>

    </div>
  );
}
