import { Container } from "react-bootstrap";
import EventForm from "../EventForm";
import Event from "../Event";
import "./Home.css";

export default function Home(props) {
  return (
    <Container className="text-center">
      <EventForm
        getEvents={props.getEvents}
        setSearchQuery={props.setSearchQuery}
      />
      <Event eventData={props.eventData} />
    </Container>
  );
}
