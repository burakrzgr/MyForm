import { Container, Modal, Stack } from "react-bootstrap";
import { CompletedForm, Operation } from "./class/CompletedForm";
import History from "./History";
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
                        <Modal.Body className="p-0">
                            <div style={{ display: "table-row" }}>
                                <div className="me-auto w-100" style={{ display: "table-cell" }} >
                                    <div className="text-dark p-2 pt-3" style={{ backgroundColor: "#b5d5ea" }}>
                                        <h3 style={{ fontWeight: "700" }}>{form.formName}</h3>
                                        <h5 style={{ fontWeight: "500" }}>{form.formDesc}</h5>
                                        <div>{form.personalInfoShared ? <div className="text-danger">Personel info shared.</div> : <div className="text-success">Participant is anonymous.</div>}</div>
                                    </div>
                                    <Container style={{ maxHeight: '55vh', overflowY: "auto" }} fluid>
                                        <h4 style={{ fontWeight: "500" }} className="text-muted pt-3">Questions & Answers</h4>

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
                                </div>
                                <History history={[{operationType:4},{operationType:7}] as Operation[]} allowed={false}></History>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </div> : <></>}
            </Modal>
        </>);
}