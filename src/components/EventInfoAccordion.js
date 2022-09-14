import { Accordion } from 'react-bootstrap';

export default function EventInfoAccordion({ selectedEvent }) {
    return (
        <>
        <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Event Info</Accordion.Header>
              <Accordion.Body>
                {selectedEvent._embedded.venues[0].generalInfo.generalRule}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
    )
}
