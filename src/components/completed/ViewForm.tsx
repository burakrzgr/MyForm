import { Container, Modal } from "react-bootstrap";
import { CompletedForm } from "./class/CompletedForm";

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
                            <Modal.Title>{form.formName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ maxHeight: '75vh',overflowY:"auto" }}>
                            <Container fluid>
                                <div>{form.formDesc}</div>
                                <div>{form.personalInfoShared ? <div className="text-danger">Personel info shared.</div> : <div className="text-success">Participant is anonymous.</div>}</div>
                                <div >
                                    {form.completedQuestions?.map(x => {
                                        return (
                                            <div key={x.id}>
                                                <div>{x.questionText}
                                                    {x.questionDetail}
                                                    {x.questionType}</div>
                                                <div>{x.answer}</div>
                                            </div>
                                        )
                                    })}
                                    {form.completedQuestions?.map(x => {
                                        return (
                                            <div key={x.id}>
                                                <div>{x.questionText}
                                                    {x.questionDetail}
                                                    {x.questionType}</div>
                                                <div>{x.answer}</div>
                                            </div>
                                        )
                                    })}
                                    {form.completedQuestions?.map(x => {
                                        return (
                                            <div key={x.id}>
                                                <div>{x.questionText}
                                                    {x.questionDetail}
                                                    {x.questionType}</div>
                                                <div>{x.answer}</div>
                                            </div>
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