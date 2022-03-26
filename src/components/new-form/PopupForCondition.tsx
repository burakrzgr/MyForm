import { useState } from "react";
import { Button, ButtonGroup, Form, Modal, Stack } from "react-bootstrap";
import { QuestionTemplate } from "./class/FieldofForm";

export default function PopupForCondition({
    show,
    closeHandle,
    conditionAddedEvent,
    item,
    questions,
}: {
    show: boolean;
    closeHandle: Function;
    conditionAddedEvent: Function;
    item: QuestionTemplate;
    questions: QuestionTemplate[];
}) {
    const [condition, setCondition] = useState<{ action: number }>({ action: 1 });
    return (
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => closeHandle()}
            backdrop="static"
            centered
        >
            <div>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create New Field
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mt-3" >
                        <Form.Label>If condition meets..</Form.Label>
                        <Stack direction="horizontal">
                            <div className="me-auto" onClick={() => setCondition({ ...condition, action: 1 })}>
                                <Form.Check
                                    type="radio"
                                    label="Show"
                                    checked={condition.action === 1}
                                    name="flexRadioDefault"
                                    readOnly
                                ></Form.Check>
                            </div>
                            <div className="me-auto" onClick={() => setCondition({ ...condition, action: 2 })}>
                                <Form.Check
                                    type="radio"
                                    label="Hide"
                                    checked={condition.action === 2}
                                    name="flexRadioDefault"
                                    readOnly
                                ></Form.Check>
                            </div>
                            <div className="me-auto" onClick={() => setCondition({ ...condition, action: 3 })}>
                                <Form.Check
                                    type="radio"
                                    label="Disable"
                                    checked={condition.action === 3}
                                    readOnly
                                ></Form.Check>
                            </div>
                        </Stack>
                        <Form.Label>Condition is..</Form.Label>
                        <Stack direction="horizontal">
                            <Form.Select aria-label="Select Condition" className="mt-3 control-shadow me-auto" onChange={(e) => {}}>
                                <option value="-">[Select area ...]</option>
                                {questions ? questions.filter(x => x!==item).map((i,key) => (
                                    <option value={i.questionText} key={key}>{i.questionText}</option>
                                )):<></>}
                            </Form.Select>
                            <Form.Select aria-label="Select Condition" className="mt-3 control-shadow me-auto ms-3" style={{width:"10rem"}} onChange={(e) => {}}>
                                <option value="equal">Equal</option>
                                <option value="selected">Selected</option>
                                <option value="contains">Contains</option>
                                <option value="filled">Filled</option>
                                <option value="empty">Empty</option>
                            </Form.Select>
                            <Form.Control
                                type="text"
                                placeholder="Condition value"
                                value={""}
                                className="control-shadow mt-3 me-auto ms-3"
                                onChange={(vl: any) => {}}
                            />
                        </Stack>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <ButtonGroup size="sm" className="w-50">
                    <Button
                        variant="success"
                        className=" control-shadow"
                        onClick={() => { }}
                    >
                        Add Condition
                    </Button>
                    <Button
                        variant="danger"
                        className=" control-shadow"
                        onClick={() => { }}
                    >
                        Remove All
                    </Button>
                </ButtonGroup>
                </Modal.Footer>
            </div>
        </Modal>
    );
}