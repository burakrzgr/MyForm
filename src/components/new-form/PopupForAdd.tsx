import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import SelectCriteriaType from "./SelectCriteriaType";
import "../../css/form-input.css";
import mystyle from "../../mystyle";
import { TextBox, TextArea } from "./new-field/TextField";
import { SelectionList, SelectionCombo } from "./new-field/Selections";
import Rating from "./new-field/Rating";
import CheckValue from "./new-field/CheckValue";
import AcceptPolicy from "./new-field/AcceptPolicy";
import DateTime from "./new-field/DateTime";
import { enumQuestionType, QuestionTemplate } from "./class/FormTemplate";
import UploadFile from "./new-field/UploadFile";
import InfoField from "./new-field/InfoField";
import { defaultValues } from "./class/defaultValues";

export default function PopupForAdd({ show, closeHandle, questionAddedEvent }: { show: boolean, closeHandle: Function, questionAddedEvent: Function }) {
    const [question, setQuestion] = React.useState<QuestionTemplate>({
      answerArea: {},
      questionText: "",
      questionType: enumQuestionType.Info,
      id : 0
    });

    const close =() =>{
        setQuestion({
            answerArea: {},
            questionText: "",
            questionType: enumQuestionType.Info,
            id : 0
          });
          closeHandle();
    }
    const [type, setType] = useState<string>("tx_b");
    
    const addCriteria = () => {
        let myType : enumQuestionType; // =  enumQuestionType.Info;
        myType = {
            "tx_b" : enumQuestionType.TextBox,
            "tx_a" : enumQuestionType.TextArea,
            "sel_" : enumQuestionType.RadioButton,
            "cm_b" : enumQuestionType.ComboBox,
            "ch_b" : enumQuestionType.CheckBox,
            "date" : enumQuestionType.DateTime,
            "rate" : enumQuestionType.Rate,
            "ap_c" : enumQuestionType.Acceptpolicy,
            "f_up" : enumQuestionType.Upload,
            "info" : enumQuestionType.Info
        }[type]??enumQuestionType.Info;

        let thisQuestion = {...question,questionType : myType};

        if(type === "ch_b" && !thisQuestion.answerArea.checkText)
            thisQuestion = {...thisQuestion, answerArea : {...thisQuestion.answerArea, checkText: defaultValues.emptyChecktext }};
        if(type === "ap_c" && !thisQuestion.answerArea.checkText)
            thisQuestion = {...thisQuestion, answerArea : {...thisQuestion.answerArea, checkText: defaultValues.emptyAcceptPolicyText }};
                
        console.log(thisQuestion);

        setQuestion({
            answerArea: {},
            questionText: "",
            questionType: enumQuestionType.TextArea,
            id : 0
          });
        questionAddedEvent(thisQuestion);
    }

    return (
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => close()}
            backdrop="static"
            centered
        >
            <div>
                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                    >
                        Create New Field
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form.Group className="" controlId="formtype">
                        <Form.Label >Item Type</Form.Label>
                        <div style={mystyle.formControl}>
                            <SelectCriteriaType selected={type} selectedChanged={(vl: any) => setType(vl)} ></SelectCriteriaType>
                        </div>
                    </Form.Group>
                    <Form.Group className="pt-3" controlId="formtextBox">
                        <Form.Label><h5>Question</h5></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Question"
                            value={question.questionText}
                            rows={2}
                            as="textarea"
                            style={{ resize: "none" }}
                            className="control-shadow"
                            onChange={(vl: any) => setQuestion({...question, questionText : vl.target.value})} />
                    </Form.Group>
                    <hr /> 
                    {
                        show ? 
                        {
                            "tx_b": <TextBox value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "tx_a": <TextArea value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "sel_": <SelectionList value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "cm_b": <SelectionCombo value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "ch_b": <CheckValue value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "date": <DateTime value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "rate": <Rating value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "f_up": <UploadFile value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} ></UploadFile>,
                            "ap_c": <AcceptPolicy value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "info": <InfoField text={question.questionText} value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />
                        }[type] :<></>
                    }
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button variant="outline-dark" className="my-bg-white ps-4 pe-4 control-shadow" onClick={() => close()}>Cancel</Button>
                    <Button variant="primary" className=" ps-4 pe-4 control-shadow" onClick={() => addCriteria()} disabled={!(question.questionText &&question.questionText.length > 5)}>Add Question</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}