import { useEffect, useState } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import SavedEventCard from "../SavedEventCard";
import "./SavedEvents.css";

function SavedEvents(props) {
  let [savedEventData, setSavedEventData] = useState([]);

  const getSavedEvents = async () => {
    const savedEventAPI = `http://localhost:3001/favorites?email=${props.auth0.user.email}`;
    const eventResponse = await axios.get(savedEventAPI);
    setSavedEventData(eventResponse.data );
  };

  const deleteEvents = async (id) => {
    const deleteEvent = `http://localhost:3001/favorites/${id}`;
    await axios.delete(deleteEvent);
    getSavedEvents();
  };

  useEffect(() => {
    getSavedEvents()
  })

    return (
      <>
        {savedEventData.map((attraction, idx) => (
          <SavedEventCard
            key={idx}
            attraction={attraction}
            deleteEvents={deleteEvents}
          />
        ))}
      </>
    );
  }

export default withAuth0(SavedEvents);