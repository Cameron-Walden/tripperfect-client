import { Container, Card, Row, Col, Button } from "react-bootstrap";

export default function SavedEventCard({ idx, attraction, deleteEvents }) {
  return (
    <>
      <Container key={idx} fluid>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={attraction.image} />
              <Card.Body>
                <Card.Title>{attraction.title}</Card.Title>
                <Card.Text>Event is in {attraction.location}</Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => deleteEvents(attraction._id)}
                >
                  Delete Event
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
