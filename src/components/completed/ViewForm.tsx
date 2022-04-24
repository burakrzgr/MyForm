import { Button, ButtonGroup, Container, Modal } from "react-bootstrap";
import { CompletedForm } from "./class/CompletedForm";

export default function ViewForm({ form, show, setShow }: { form: CompletedForm, show: boolean, setShow: Function }) {
    return (
        <>
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                onHide={() => setShow(false)}
                centered
            >
                 <div style={{ boxShadow: '0px 0px 5px #3e3e3e'}} >
                    <Modal.Header >
                        <Modal.Title>{form.formName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ height: '4rem' }}>
                        <Container fluid>
                            <div>{form.formDesc}</div>
                            <div>{form.personalInfoShared?<div color="danger">Personel info shared.</div>:<div color="success">Participant is anonymous.</div>}</div>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-between">
                        <ButtonGroup aria-label="confirmation-group" className="w-100">
                            <Button variant="outline-secondary" className="w-50" onClick={() => setShow(false)} >Cancel</Button>
                            <Button variant="success" className="w-50" onClick={() => setShow(false)} >Confirm</Button>
                        </ButtonGroup>
                    </Modal.Footer>
                </div>
            </Modal>
        </>);
}