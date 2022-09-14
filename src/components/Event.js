import { useState } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import EventCard from "./EventCard";

const Event = props => {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [error, setError] = useState(null);

  const showModal = (title) => {
    let selectedEvent = props.eventData.find(
      (singleEvent) => singleEvent.name === title
    );
    console.log(selectedEvent, 'this is selectedEvent')
    setDisplayModal(true)
    setSelectedEvent(selectedEvent)
  };

  const hideModal = () => setDisplayModal(false);

  const addEvents = async (savedEvent) => {
    try {
      let addedEvent = props.eventData.find(
        (attraction) => attraction.name === savedEvent
      );
      const config = {
        data: {
          title: addedEvent.name,
          description: addedEvent.url,
          location: addedEvent._embedded.venues[0].city.name,
          venue: addedEvent._embedded.venues.name,
          email: props.auth0.user.email,
        },
        method: "post",
        baseURL: `http://localhost:3001/favorites`,
      };
      const response = await axios(config);
      console.log(response.data, "<== response.data in add");
    } catch (e) {
      setError(true)
    }
  };

    return (
      <>
        <EventCard
          selectedEvent={selectedEvent}
          displayModal={displayModal}
          error={error}
          showModal={showModal}
          hideModal={hideModal}
          addEvents={addEvents}
          eventData={props.eventData}
        />
      </>
    );
  }

export default withAuth0(Event);