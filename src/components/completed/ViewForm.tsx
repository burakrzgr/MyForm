import { Container, Modal } from "react-bootstrap";
import { CompletedForm } from "./class/CompletedForm";
import ViewQuestion from "./ViewQuestion";

export default function ViewForm({ form, show, setShow }: { form?: CompletedForm, show: boolean, setShow: Function }) {
    return (
        <>
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                onHide={() => setShow(false)}
                centered
                size="xl"
            >
                {form ?
                    <div style={{ boxShadow: '0px 0px 5px #3e3e3e' }} >

                        <Modal.Header >
                        <Modal.Title><h3 style={{fontWeight:"700"}}>{form.formName}</h3></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ maxHeight: '75vh',overflowY:"auto" }}>
                            <Container fluid>
                                <h4 style={{fontWeight:"500"}} className="text-muted">Form Detail</h4>
                                <h5 style={{fontWeight:"500"}}>{form.formDesc}</h5>
                                <div>{form.personalInfoShared ? <div className="text-danger">Personel info shared.</div> : <div className="text-success">Participant is anonymous.</div>}</div>
                                <h4 style={{fontWeight:"500"}} className="text-muted pt-5">Questions & Answers</h4>
                                <div >
                                    {form.completedQuestions?.map(x => {
                                        return (
                                            <ViewQuestion key={x.id} question={x}></ViewQuestion>
                                        )
                                    })}
                                    {form.completedQuestions?.map(x => {
                                        return (
                                            <ViewQuestion key={x.id} question={x}></ViewQuestion>
                                        )
                                    })}
                                </div>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </div> : <></>}
            </Modal>
        </>);
}