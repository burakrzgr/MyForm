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
                        {questions.map((x) => {
                            return x.questionText;
                        })}
                        <Form.Select aria-label="Select Condition" className="mt-3 control-shadow me-auto" onChange={(e) => {}}>
                            <option value="-">[Select area to add condition...]</option>
                            {questions ? questions.map((i,key) => (
                                <option value={i.questionText} key={key}>{i.questionText}</option>
                            )):<></>}
                        </Form.Select>

                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <ButtonGroup size="sm" className="w-50">
                    <Button
                        variant="info"
                        className=" control-shadow"
                        onClick={() => { }}
                    >
                        And
                    </Button>
                    <Button
                        variant="success"
                        className="control-shadow"
                        onClick={() => { }}
                    >
                        Or
                    </Button>
                    <Button
                        variant="warning"
                        className="control-shadow"
                        onClick={() => { }}
                    >
                        Not
                    </Button>
                    <Button
                        variant="danger"
                        className=" control-shadow"
                        onClick={() => { }}
                    >
                        Remove
                    </Button>
                </ButtonGroup>
                </Modal.Footer>
            </div>
        </Modal>
    );
}