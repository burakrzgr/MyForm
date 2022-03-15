import { Form, FormControl, Stack } from "react-bootstrap";
import Stars from "../custom-component/Stars";
import { FieldoForm } from "../class/FieldofForm";
import FieldHeader from "./FieldHeader";
import "../../../css/question-box.css"

const questionClass ="border rounded p-3 pt-2 mt-4 question";

export function TextField({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Control type="text" placeholder="Form Text" defaultValue={item.value} />
            </Form.Group>
        </>);
}

export function TextArea({ item , removeEvent}: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Control type="text"
                    placeholder="Form Text"
                    defaultValue={item.value}
                    rows={item.count}
                    as="textarea"
                    style={{ resize: "none" }} />
            </Form.Group>
        </>);
}

export function FieldSelect({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                {item.options ? item.options.map((i, key) => (
                    <Form.Check
                        key={key}
                        type={item.displays ? (item.displays.multi ? "checkbox" : "radio") : "radio"}
                        label={i}
                        checked={false}
                        onChange={(e: any) => { }}
                    ></Form.Check>
                )) : <></>}
            </Form.Group>
        </>);
}
export function FieldCombo({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Select aria-label="Select option" className="control-shadow">
                    <option>[Please select one of the options...]</option>
                    {item.options ? item.options.map(i => (
                        <option value={i} key={i}>{i}</option>
                    )) : <></>}
                </Form.Select>
            </Form.Group>
        </>);
}
export function FieldCheck({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Group >
                    <Form.Check
                        type="checkbox"
                        label={item.checkText}
                        checked={item.displays?.checked}
                        onChange={(e: any) => { }}
                    ></Form.Check>
                </Form.Group>
            </Form.Group>
        </>);
}

export function FieldDateTime({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Stack direction="horizontal">
                    {item.displays && (item.displays.date || item.displays.time) ?
                        <>
                            {item.displays.date ?
                                <div className="p-2">
                                    <Form.Label>Date</Form.Label>
                                    <FormControl type="date" style={{ width: "10rem" }} className="control-shadow"></FormControl>
                                </div> : <></>}
                            {item.displays.time ?
                                <div className="p-2">
                                    <Form.Label>Time</Form.Label>
                                    <FormControl type="time" style={{ width: "10rem" }} className="control-shadow"></FormControl>
                                </div> : <></>}
                        </> : <span className="alert alert-danger p-2 ps-4 pe-4 mt-4">Date Time  Error!</span>}
                </Stack>
            </Form.Group>
        </>);
}

export function FieldRate({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Stars count={item.count ? item.count : 5}></Stars>
            </Form.Group>
        </>);
}

export function FieldAcceptPolicy({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} controlId="trb">
                <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader>
                <Form.Control type="text"
                    placeholder="Detail of the Policy is Here!"
                    defaultValue={item.value}
                    rows={12}
                    as="textarea"
                    style={{ resize: "none" }}
                    readOnly />
                <Form.Check
                    type="checkbox"
                    label={item.checkText}
                    checked={false}
                    onChange={(e: any) => { }}
                ></Form.Check>
            </Form.Group>
        </>);
}