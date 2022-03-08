import { Button, Modal } from "react-bootstrap"


export default function PopupForAdd({ show, closeHandle }: { show: boolean, closeHandle: Function }) {
    const addCriteria=() =>{
        alert("Done!!");
    }
    return (
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => closeHandle()}
            backdrop="static"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    style={{ color: '#000' }}
                >
                    Yeni Alan Ekle
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: '#000' }}>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button variant="outline-dark" onClick={() => closeHandle()}>Cancel</Button>
                <Button variant="primary" onClick={() => addCriteria()}>Add Criteria</Button>
            </Modal.Footer>
        </Modal>
    );
}