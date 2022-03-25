import { Form, FormControl, Stack } from "react-bootstrap";
import Stars from "../custom-component/Stars";
import { QuestionTemplate } from "../class/FieldofForm";
import FieldHeader from "./FieldHeader";
import "../../../css/question-box.css"

const questionClass ="border rounded p-3 pt-2 mt-4 question";

export function TextField({ item, removeEvent }: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Control type="text" placeholder="Form Text" defaultValue={item.answerArea.defaultText} />
            </Form.Group>
        </>);
}

export function TextArea({ item , removeEvent}: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Control type="text"
                    placeholder="Form Text"
                    defaultValue={item.answerArea.defaultText}
                    rows={item.answerArea.textHeight}
                    as="textarea"
                    style={{ resize: "none" }} />
            </Form.Group>
        </>);
}

export function FieldSelect({ item, removeEvent }: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                {item.answerArea.options ? item.answerArea.options.map((i : any , key : any) => (
                    <Form.Check
                        key={key}
                        type={item.answerArea.multi ? (item.answerArea.multi ? "checkbox" : "radio") : "radio"}
                        label={i}
                        checked={false}
                        onChange={(e: any) => { }}
                    ></Form.Check>
                )) : <></>}
            </Form.Group>
        </>);
}
export function FieldCombo({ item, removeEvent }: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Select aria-label="Select option" className="control-shadow">
                    <option>[Please select one of the options...]</option>
                    {item.answerArea.options ? item.answerArea.options.map((i : any) => (
                        <option value={i} key={i}>{i}</option>
                    )) : <></>}
                </Form.Select>
            </Form.Group>
        </>);
}
export function FieldCheck({ item, removeEvent }: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Group >
                    <Form.Check
                        type="checkbox"
                        label={item.answerArea.checkText}
                        checked={item.answerArea.defaultChecked}
                        onChange={(e: any) => { }}
                    ></Form.Check>
                </Form.Group>
            </Form.Group>
        </>);
}

export function FieldDateTime({ item, removeEvent }: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Stack direction="horizontal">
                    {item.answerArea && (item.answerArea.checkDate || item.answerArea.checkTime) ?
                        <>
                            {item.answerArea.checkDate ?
                                <div className="p-2">
                                    <Form.Label>Date</Form.Label>
                                    <FormControl type="date" style={{ width: "10rem" }} className="control-shadow"></FormControl>
                                </div> : <></>}
                            {item.answerArea.checkTime ?
                                <div className="p-2">
                                    <Form.Label>Time</Form.Label>
                                    <FormControl type="time" style={{ width: "10rem" }} className="control-shadow"></FormControl>
                                </div> : <></>}
                        </> : <span className="alert alert-danger p-2 ps-4 pe-4 mt-4">Date Time Error!</span>}
                </Stack>
            </Form.Group>
        </>);
}

export function FieldRate({ item, removeEvent }: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Stars count={item.answerArea.stars ? item.answerArea.stars : 5}></Stars>
            </Form.Group>
        </>);
}

export function FieldAcceptPolicy({ item, removeEvent }: { item: QuestionTemplate, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Control type="text"
                    placeholder="Detail of the Policy is Here!"
                    defaultValue={item.answerArea.description}
                    rows={12}
                    as="textarea"
                    style={{ resize: "none" }}
                    readOnly />
                <Form.Check
                    type="checkbox"
                    label={item.answerArea.checkText}
                    checked={false}
                    onChange={(e: any) => { }}
                ></Form.Check>
            </Form.Group>
        </>);
}