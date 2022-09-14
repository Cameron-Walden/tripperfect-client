import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import SavedEvents from "./components/savedevents/SavedEvents";
import Footer from "./components/footer/Footer";
import "./App.css";

function App({ auth0 }) {
 
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/saved-events">
            {auth0.isAuthenticated ? (
              <SavedEvents />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default withAuth0(App);
