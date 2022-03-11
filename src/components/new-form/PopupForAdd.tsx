import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import SelectCriteriaType from "./SelectCriteriaType";
import "../../css/form-input.css";
import mystyle from "../../mystyle";
import { TextBox, TextArea } from "./new-item/TextField";
import { SelectionList, SelectionCombo } from "./new-item/Selections";
import Rating from "./new-item/Rating";
import CheckValue from "./new-item/CheckValue";
import AcceptPolicy from "./new-item/AcceptPolicy";
import DateTime from "./new-item/DateTime";
import { itemOfForm } from "./ItemofForm";



export default function PopupForAdd({ show, closeHandle, addedHandle }: { show: boolean, closeHandle: Function, addedHandle: Function }) {
    const [type, setType] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [count, setCount] = useState<number>(3);
    const [options, setOptions] = useState<{ items: string[] }>({ items: [] });
    const [displays, setDisplays] = useState<{ items: boolean[] }>({ items: [] });

    const addCriteria = () => {
        let item: itemOfForm = { name, type, value: undefined, options: undefined, count: undefined, displays: undefined };

        item.value = {
            "tx_b": value,
            "tx_a": value,
            "ap_c": value
        }[type];

        item.options = {
            "sel_": options.items,
            "cm_b": options.items
        }[type];

        item.count = {
            "rate": count,
            "ap_c": count
        }[type];

        addedHandle(item);
    }

    useEffect(() => {
        setName("");
    }, [show])

    return (
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => closeHandle()}
            backdrop="static"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                >
                    Yeni Alan Ekle
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form.Group className="" controlId="formtextBox">
                    <Form.Label><h5>Item Text</h5></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Item Text"
                        className="form-underline"
                        value={name}
                        onChange={(vl: any) => setName(vl.target.value)} />
                </Form.Group>
                <Form.Group className="" controlId="formtextBox">
                    <Form.Label className="pt-3">Item Type</Form.Label>
                    <div style={mystyle.formControl}>
                        <SelectCriteriaType selected={type} selectedChanged={(vl: any) => setType(vl)} ></SelectCriteriaType>
                    </div>
                </Form.Group>
                <hr />
                {
                    {
                        "tx_b": <TextBox value={value} setValue={setValue} />,
                        "tx_a": <TextArea value={value} setValue={setValue} count={count} setCount={setCount} />,
                        "sel_": <SelectionList options={options} setOptions={setOptions}></SelectionList>,
                        "cm_b": <SelectionCombo options={options} setOptions={setOptions}></SelectionCombo>,
                        "ch_b": <CheckValue></CheckValue>,
                        "date": <DateTime></DateTime>,
                        "rate": <Rating count={count} setCount={setCount} ></Rating>,
                        "ap_c": <AcceptPolicy value={value} setValue={setValue} ></AcceptPolicy>
                    }[type]
                }
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button variant="outline-dark" onClick={() => closeHandle()}>Cancel</Button>
                <Button variant="primary" onClick={() => addCriteria()}>Add Criteria</Button>
            </Modal.Footer>
        </Modal>
    );
}