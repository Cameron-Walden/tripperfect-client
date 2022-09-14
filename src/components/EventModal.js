import { Modal, Image, Button, ModalBody } from "react-bootstrap";
import EventInfoAccordion from "./EventInfoAccordion";

const EventModal = ({ selectedEvent, displayModal, hideModal }) => {
  if (!selectedEvent) return null;

  return (
    <Modal show={displayModal} onHide={hideModal} backdrop="static">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {selectedEvent.dates.start.localDate} at{" "}
          {selectedEvent.dates.start.localTime} local time
        </Modal.Body>
        <ModalBody>
          {" "}
          PRICE RANGE: ${selectedEvent.priceRanges[0].min} - $
          {selectedEvent.priceRanges[0].max}
        </ModalBody>
        <ModalBody>
          PROMOTER: {selectedEvent.promoter.description}
        </ModalBody>
        <ModalBody>{selectedEvent.ticketLimit.info}</ModalBody>
        <Image
          alt=""
          src={selectedEvent.seatmap.staticUrl}
          style={{ height: 300 }}
        />
        <EventInfoAccordion selectedEvent={selectedEvent} />
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default EventModal;
