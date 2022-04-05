import { Button, ButtonGroup, Container, Modal } from "react-bootstrap";


export default function ConfirmMe({
  header,
  message,
  show,
  variant,
  confirmedEvent,
  rejectedEvent,
}: {
  header : string;
  message : string;
  show : boolean;
  variant:string;
  confirmedEvent: Function;
  rejectedEvent: Function;
}) {
  return (
    <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => rejectedEvent()}
        centered
    >
        <div style={{ boxShadow: '0px 0px 5px #3e3e3e'}} >
        <Modal.Header >
            <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '4rem' }}>
            <Container fluid>
                <div>{message}</div>
            </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
            <ButtonGroup aria-label="confirmation-group" className="w-100">
                <Button variant="outline-secondary" className="w-50" onClick={() => rejectedEvent()} >Cancel</Button>
                <Button variant={variant} className="w-50" onClick={() => confirmedEvent()} >Confirm</Button>
            </ButtonGroup>
        </Modal.Footer>
        </div>
    </Modal>);
}