import * as React from "react";
import { Outlet } from "react-router-dom";
//
import Title from "../layout/Title";
import Menu from "../layout/Menu";

export default function Root() {
  return (
    <div className="container-fluid border m-1">
      <Title />
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
