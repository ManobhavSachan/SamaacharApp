import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div style={{ backgroundColor: "#2f3136" }}>
            <NavBar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    key={"home"}
                    pageSize={18}
                    country={"in"}
                    category={"general"}
                  />
                }
              />
              <Route
                exact
                path="/News"
                element={
                  <News
                    key={"general"}
                    pageSize={18}
                    country={"in"}
                    category={"general"}
                  />
                }
              />
              <Route
                exact
                path="/Entertainment"
                element={
                  <News
                    key={"entertainment"}
                    pageSize={18}
                    country={"in"}
                    category={"entertainment"}
                  />
                }
              />
              <Route
                exact
                path="/Business"
                element={
                  <News
                    key={"business"}
                    pageSize={18}
                    country={"in"}
                    category={"business"}
                  />
                }
              />
              <Route
                exact
                path="/Health"
                element={
                  <News
                    key={"health"}
                    pageSize={18}
                    country={"in"}
                    category={"health"}
                  />
                }
              />
              <Route
                exact
                path="/Science"
                element={
                  <News
                    key={"science"}
                    pageSize={18}
                    country={"in"}
                    category={"science"}
                  />
                }
              />
              <Route
                exact
                path="/Sports"
                element={
                  <News
                    key={"sports"}
                    pageSize={18}
                    country={"in"}
                    category={"sports"}
                  />
                }
              />
              <Route
                exact
                path="/Technology"
                element={
                  <News
                    key={"technology"}
                    pageSize={18}
                    country={"in"}
                    category={"technology"}
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
