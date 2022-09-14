import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import SavedEvents from "./components/savedevents/SavedEvents";
import Footer from "./components/footer/Footer";
import "./App.css";

function App(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventData, setEventData] = useState([]);

  const getEvents = async (event) => {
    event.preventDefault();
    try {
      const eventAPI = `http://localhost:3001/events?city=${searchQuery}&startDateTime`;
      const eventResponse = await axios.get(eventAPI);
      setEventData(eventResponse.data._embedded.events);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/saved-events">
            {props.auth0.isAuthenticated ? (
              <SavedEvents />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/">
            <Home
              setSearchQuery={setSearchQuery}
              eventData={eventData}
              getEvents={getEvents}
            />
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
