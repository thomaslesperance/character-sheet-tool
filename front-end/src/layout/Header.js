import React from "react";

export default function Header({ headerText }) {
  return (
    <>
      <div className="row m-1 border">
        <h2>{headerText}</h2>
      </div>
    </>
  );
}
