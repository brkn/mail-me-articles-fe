import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import {Homepage} from "../Homepage/Homepage";
import {Header} from "../Header/Header";
import {RegisterPage} from "../RegisterPage/RegisterPage";

function App() {
  return (
    <>
      {/* <SideNav /> */}
      
      <BrowserRouter>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            component={Homepage}
          />

          <Route
            exact
            path="/login"
            component={Homepage}
          />

          <Route
            exact
            path="/register"
            component={RegisterPage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export {App};
