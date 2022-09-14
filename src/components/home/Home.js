import { Container } from "react-bootstrap";
import { useState } from "react";
import EventForm from "../EventForm";
import Event from "../Event";
import "./Home.css";

export default function Home(props) {
  const [eventData, setEventData] = useState([]);

  return (
    <Container className="text-center">
      <EventForm eventData={eventData} setEventData={setEventData} />
      <Event eventData={eventData} />
    </Container>
  );
}
