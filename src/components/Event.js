import { useState } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import EventCard from "./EventCard";

function Event({ eventData, auth0 }){
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [error, setError] = useState(false);

  const showModal = (title) => {
    let selectedEvent = eventData.find(
      (singleEvent) => singleEvent.name === title
    );
    setDisplayModal(true)
    setSelectedEvent(selectedEvent)
  };

  const hideModal = () => setDisplayModal(false);

  const addEvents = async (savedEvent) => {
    try {
      let addedEvent = eventData.find(
        (attraction) => attraction.name === savedEvent
      );
      const config = {
        data: {
          title: addedEvent.name,
          description: addedEvent.url,
          location: addedEvent._embedded.venues[0].city.name,
          venue: addedEvent._embedded.venues.name,
          email: auth0.user.email,
        },
        method: "post",
        baseURL: `http://localhost:3001/favorites`,
      };
      const response = await axios(config);
      console.log(response.data, "<== response.data in add");
    } catch (e) {
      setError(!error)
    }
  };

    return (
      <>
        <EventCard
          selectedEvent={selectedEvent}
          displayModal={displayModal}
          showModal={showModal}
          hideModal={hideModal}
          addEvents={addEvents}
          eventData={eventData}
        />
      </>
    );
  }

export default withAuth0(Event);