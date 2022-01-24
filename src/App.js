import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import WeaponDetails from "./Pages/WeaponDetails";
import Main from "./Pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/weapon/:weaponId" component={WeaponDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
