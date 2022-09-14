import { useState } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function EventForm({ setEventData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuery = (searchQuery) => setSearchQuery(searchQuery);

  const getEvents = async (event) => {
    event.preventDefault();
    try {
      const eventAPI = `http://localhost:3001/events?city=${searchQuery}&startDateTime`;
      const eventResponse = await axios.get(eventAPI);
      setEventData(eventResponse.data._embedded.events);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={(event) => getEvents(event)}>
        <Row className="justify-content-md-center">
          <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Please Enter City Name
            </Form.Label>
            <Form.Control
              onChange={(e) => handleSearchQuery(e.target.value)}
              placeholder="Ex: Seattle"
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button
              type="submit"
              as="input"
              value="Submit"
              variant="outline-light"
            />{" "}
          </Col>
        </Row>
      </Form>
    </>
  );
}
