import React from "react";
import { Switch, Route } from "react-router-dom";
//
import { Title } from "./layout/Title";
import { Menu } from "./layout/Menu";

export default function App() {
  return (
    <div className="container-fluid">
      <Title />
      <Menu />
      <Switch></Switch>
    </div>
  );
}
