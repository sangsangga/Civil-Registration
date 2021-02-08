import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import AddData from "./pages/AddData";
import Home from "./pages/Home";
import EditData from "./pages/EditData";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <AddData />
            </Route>
            <Route path="/edit">
              <EditData />
            </Route>
          </Switch>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
