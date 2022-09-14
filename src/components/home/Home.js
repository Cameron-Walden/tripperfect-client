import { Container } from "react-bootstrap";
import { useState } from "react";
import EventForm from "../EventForm";
import Event from "../Event";
import "./Home.css";

export default function Home() {
  const [eventData, setEventData] = useState([]);

  return (
    <Container className="text-center">
      <EventForm setEventData={setEventData} />
      <Event eventData={eventData} />
    </Container>
  );
}
