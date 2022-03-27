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
import { Display, enumQuestionType, QuestionTemplate } from "./class/FormTemplate";
import UploadFile from "./new-field/UploadFile";
import InfoField from "./new-field/InfoField";
import { defaultValues } from "./class/defaultValues";

export default function PopupForAdd({ show, closeHandle, questionAddedEvent }: { show: boolean, closeHandle: Function, questionAddedEvent: Function }) {
    const [question, setQuestion] = React.useState<QuestionTemplate>({
      answerArea: {},
      questionText: "",
      questionType: enumQuestionType.TextBox,
      id : 0
    });

    useEffect(() => {
        setQuestion({
            answerArea: {},
            questionText: "",
            questionType: enumQuestionType.TextBox,
            id : 0
          });
    }, [show]);


    const [type, setType] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [variant, setVariant] = useState<string>("danger");
    const [checkText, setCheckText] = useState<string>("");
    const [count, setCount] = useState<number>(3);
    const [displays, setDisplays] = useState<{ items:Display }>({ items: {checked:false,multi:false, date:true, time:true} });

    const addCriteria = () => {
        
        let myType : enumQuestionType =  enumQuestionType.TextBox;
        if(type === "tx_a")
            myType = enumQuestionType.TextArea;
        if(type === "sel_")
            myType = enumQuestionType.RadioButton;
        if(type === "cm_b")
            myType = enumQuestionType.ComboBox;
        if(type === "ch_b")
            myType = enumQuestionType.CheckBox;
            
        if(type === "ch_b")
            myType = enumQuestionType.CheckBox;

            
        let thisQuestion = {...question,questionType : myType};

        if(type === "ch_b" && !thisQuestion.answerArea.checkText)
            thisQuestion = {...thisQuestion, answerArea : {...thisQuestion.answerArea, checkText: defaultValues.emptyChecktext }};


        setQuestion({
            answerArea: {},
            questionText: "",
            questionType: enumQuestionType.TextArea,
            id : 0
          });
        questionAddedEvent(thisQuestion);
    }

    const setCheck = (index: string, val: boolean) => {
        let list = displays.items;
        list.checked = index === "checked" ? val : list.checked;
        list.multi = index === "multi" ? val : list.multi;
        list.date = index === "date" ? val : list.date;
        list.time = index === "time" ? val : list.time;
        setDisplays({ ...displays, items: list })
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
                        {
                            "tx_b": <TextBox value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "tx_a": <TextArea value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "sel_": <SelectionList value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "cm_b": <SelectionCombo value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "ch_b": <CheckValue value={question.answerArea} setValue={(val : string) =>  setQuestion({...question,answerArea : val})} />,
                            "date": <DateTime check={displays.items} setCheck={(index: string, val: boolean) => setCheck(index, val)}></DateTime>,
                            "rate": <Rating count={count} setCount={setCount} ></Rating>,
                            "f_up": <UploadFile ></UploadFile>,
                            "ap_c": <AcceptPolicy value={value} setValue={setValue} checkText={checkText} setCheckText={setCheckText} ></AcceptPolicy>,
                            "info": <InfoField text={question.questionText} closable={true} setClosable={() => {}} infoType={variant} setInfoType={(val : string) => setVariant(val)}></InfoField>
                        }[type]
                    }
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button variant="outline-dark" className="my-bg-white ps-4 pe-4 control-shadow" onClick={() => closeHandle()}>Cancel</Button>
                    <Button variant="primary" className=" ps-4 pe-4 control-shadow" onClick={() => addCriteria()} disabled={!(question.questionText &&question.questionText.length > 5)}>Add Question</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}