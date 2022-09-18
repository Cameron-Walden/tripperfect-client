import { withAuth0 } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card, Row } from "react-bootstrap";
import EventModal from "./EventModal";
import WelcomeCard from "./WelcomeCard";

function EventCard({
  selectedEvent,
  displayModal,
  showModal,
  hideModal,
  addEvents,
  eventData,
  auth0,
}) {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {eventData.map((attraction, idx) => (
          <Card key={idx} id="eventcard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={attraction.images[0].url} />
            <Card.Body>
              <Card.Title>{attraction.name}</Card.Title>
              <Card.Text>
                <a
                  href={attraction.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ticket Link
                </a>
              </Card.Text>
              <Card.Text>
                <strong>Start Date:</strong>{" "}
                {attraction.dates.start.localDate}<br></br>
                <strong>Start Time:</strong>{" "}
                {attraction.dates.start.localTime}
              </Card.Text>
              <Button onClick={() => showModal(attraction.name)}>
                More Info
              </Button>
              <EventModal
                selectedEvent={selectedEvent}
                displayModal={displayModal}
                hideModal={hideModal}
              />
              {auth0.isAuthenticated ? (
                <Button
                  id="eventbutton"
                  variant="primary"
                  onClick={() => addEvents(attraction.name)}
                >
                  Save Event!
                </Button>
              ) : (
                <Button
                  id="eventbutton"
                  variant="primary"
                  onClick={() => loginWithRedirect()}
                >
                  Log In To Save Event
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </Row>
      <WelcomeCard />
    </>
  );
}

export default withAuth0(EventCard);