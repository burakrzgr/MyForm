import { Form, FormControl, Stack } from "react-bootstrap";
import { FieldoForm } from "../FieldofForm";
import FieldHeader from "./FieldHeader";


export function TextField({ item }: { item: FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                <FieldHeader item={item}></FieldHeader>
                <Form.Control type="text" placeholder="Form Text" defaultValue={item.value} />
            </Form.Group>
            <hr />
        </>);
}

export function TextArea({ item }: { item: FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                <FieldHeader item={item}></FieldHeader>
                <Form.Control type="text"
                    placeholder="Form Text"
                    defaultValue={item.value}
                    rows={item.count}
                    as="textarea"
                    style={{ resize: "none" }} />
            </Form.Group>
            <hr />
        </>);
}

export function FieldSelect({ item }: { item: FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                <FieldHeader item={item}></FieldHeader>
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
            <hr />
        </>);
}
export function FieldCombo({ item }: { item: FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                <FieldHeader item={item}></FieldHeader>
                <Form.Select aria-label="Select option" className="mt-3 control-shadow">
                    <option>[Please select one of the options...]</option>
                    {item.options ? item.options.map(i => (
                        <option value={i} key={i}>{i}</option>
                    )) : <></>}
                </Form.Select>
            </Form.Group>
            <hr />
        </>);
}
export function FieldCheck({ item }: { item: FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                <FieldHeader item={item}></FieldHeader>
                <Form.Group className="mt-3">
                    <Form.Check
                        type="checkbox"
                        label={item.checkText}
                        checked={item.displays?.checked}
                        onChange={(e: any) => { }}
                    ></Form.Check>
                </Form.Group>
            </Form.Group>
            <hr />
        </>);
}

export function FieldDateTime({ item }: { item: FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                <FieldHeader item={item}></FieldHeader>
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
                        </> :<span className="alert alert-danger p-2 ps-4 pe-4 mt-4">Date Time  Error!</span>}
                </Stack>
            </Form.Group>
            <hr />
        </>);
}

