import { Alert, Form, FormControl, Stack } from "react-bootstrap";
import "../../../css/question-box.css"
import MyFileUploader from "../../misc/MyFileUploader";
import { QuestionTemplate } from "../../new-form/class/FormTemplate";
import Stars from "../../new-form/custom-component/Stars";
import FillFieldHeader from "./FillFieldHeader";

const questionClass = "border rounded p-3 pt-2 mt-4 mb-4 question";

export function FillTextField({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item} />
                <Form.Control type="text" placeholder="Form Text" defaultValue={item.answerArea.defaultText} />
            </Form.Group>
        </>);
}

export function FillTextArea({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item} />
                <Form.Control type="text"
                    placeholder="Form Text"
                    defaultValue={item.answerArea.defaultText}
                    rows={item.answerArea.textHeight}
                    as="textarea"
                    style={{ resize: "none" }} />
            </Form.Group>
        </>);
}

export function FillFieldSelect({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item} />
                {item.answerArea.options ? item.answerArea.options.map((i: any, key: any) => (
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
export function FillFieldCombo({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item} />
                <Form.Select aria-label="Select option" className="control-shadow">
                    <option>[Please select one of the options...]</option>
                    {item.answerArea.options ? item.answerArea.options.map((i: any) => (
                        <option value={i} key={i}>{i}</option>
                    )) : <></>}
                </Form.Select>
            </Form.Group>
        </>);
}
export function FillFieldCheck({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass}>
                <FillFieldHeader item={item} />
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

export function FillFieldDateTime({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
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

export function FillFieldRate({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item} />
                <Stars count={item.answerArea.stars ? item.answerArea.stars : 5}></Stars>
            </Form.Group>
        </>);
}

export function FillFieldAcceptPolicy({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item} />
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
export function FillFieldUpload({ item, removeEvent, addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item} />
                <div className="w-100 expand-child bg-light text-dark p-1 rounded">
                    <MyFileUploader
                        fileTypes={item.answerArea.fileTypes}
                        multi={item.answerArea.multi}
                        files={[]}
                        setFiles={() => { }}
                    ></MyFileUploader>
                </div>
            </Form.Group>
        </>);
}
export function FillFieldInfo({ item }: { item: QuestionTemplate }) {
    return (
        <>
            <Form.Group className="p-0 m-0 mt-5 mb-5"  >
                <Alert variant={item.answerArea.variant ?? "info"} onClose={() => { }} dismissible> {item.questionText}</Alert>
            </Form.Group>
        </>);
}