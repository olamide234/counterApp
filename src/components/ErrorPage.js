import React from "react";

export default function ErrorPage({ person }) {
  return (
    <div>
      <h1>
        {person.firstName.toUppercase()} {person.lastName.toUppercase()}
      </h1>
    </div>
  );
}
