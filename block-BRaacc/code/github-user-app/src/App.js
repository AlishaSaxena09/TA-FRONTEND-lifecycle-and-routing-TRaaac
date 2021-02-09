import React from "react";
import { Route } from "react-router-dom";
import GithubUserInfo from "./GithubUserInfo";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/user/:username" component={GithubUserInfo} />
    </div>
  );
}

export default App;
