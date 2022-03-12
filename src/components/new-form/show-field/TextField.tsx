import { Form } from "react-bootstrap";
import { FieldoForm } from "../FieldofForm";
import FieldHeader from "./FieldHeader";


export function TextField({item} : {item:FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                   <FieldHeader item={item}></FieldHeader>
                    <Form.Control type="text" placeholder="Form Text" defaultValue={item.value} />
            </Form.Group>
            <hr />
        </>);
}

export function TextArea({item} : {item:FieldoForm }) {
    return (
        <>
            <Form.Group className="pt-5" controlId="trb">
                   <FieldHeader item={item}></FieldHeader>
                    <Form.Control type="text" 
                        placeholder="Form Text" 
                        defaultValue={item.value}
                        rows={item.count}
                        as="textarea"
                        style={{ resize: "none" }}/>
            </Form.Group>
            <hr />
        </>);
}