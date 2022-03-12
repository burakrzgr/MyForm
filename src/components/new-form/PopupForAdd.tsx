import { useState, useEffect } from "react";
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
import { Display, FieldoForm } from "./FieldofForm";



export default function PopupForAdd({ show, closeHandle, addedHandle }: { show: boolean, closeHandle: Function, addedHandle: Function }) {
    const [type, setType] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [checkText, setCheckText] = useState<string>("");
    const [count, setCount] = useState<number>(3);
    const [options, setOptions] = useState<{ items: string[] }>({ items: [] });
    const [displays, setDisplays] = useState<{ items:Display }>({ items: {checked:false,multi:false, date:true, time:true} });

    const addCriteria = () => {
        let item: FieldoForm = { name, type, value: undefined, checkText: undefined, options: undefined, count: undefined, displays: undefined };

        item.value = {
            "tx_b": value,
            "tx_a": value,
            "ap_c": value
        }[type];

        item.checkText = {
            "ch_b": checkText,
            "ap_c": checkText,
        }[type];

        item.options = {
            "sel_": [...options.items],
            "cm_b": [...options.items]
        }[type];

        item.count = {
            "tx_a": count,
            "rate": count
        }[type];

        item.displays = {
            "ch_b": {...displays.items},
            "date": {...displays.items},
            "sel_": {...displays.items}
        }[type];

        addedHandle(item);
    }

    const setCheck = (index: string, val: boolean) => {
        let list = displays.items;
        list.checked = index == "checked" ? val : list.checked;
        list.multi = index == "multi" ? val : list.multi;
        list.date = index == "date" ? val : list.date;
        list.time = index == "time" ? val : list.time;
        setDisplays({ ...displays, items: list })
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
                            value={name}
                            rows={2}
                            as="textarea"
                            style={{ resize: "none" }}
                            className="control-shadow"
                            onChange={(vl: any) => setName(vl.target.value)} />
                    </Form.Group>
                    <hr />
                    {
                        {
                            "tx_b": <TextBox value={value} setValue={setValue} />,
                            "tx_a": <TextArea value={value} setValue={setValue} count={count} setCount={setCount} />,
                            "sel_": <SelectionList options={options} setOptions={setOptions} check={displays.items.multi} setCheck={(val: boolean) => setCheck("multi", val)}></SelectionList>,
                            "cm_b": <SelectionCombo options={options} setOptions={setOptions} ></SelectionCombo>,
                            "ch_b": <CheckValue text={checkText} setText={setCheckText} check={displays.items.checked} setCheck={(val: boolean) => setCheck("checked", val)}></CheckValue>,
                            "date": <DateTime check={displays.items} setCheck={(index: string, val: boolean) => setCheck(index, val)}></DateTime>,
                            "rate": <Rating count={count} setCount={setCount} ></Rating>,
                            "ap_c": <AcceptPolicy value={value} setValue={setValue} checkText={checkText} setCheckText={setCheckText} ></AcceptPolicy>
                        }[type]
                    }
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button variant="outline-dark" className="my-bg-white ps-4 pe-4 control-shadow" onClick={() => closeHandle()}>Cancel</Button>
                    <Button variant="primary" className=" ps-4 pe-4 control-shadow" onClick={() => addCriteria()}>Add Criteria</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}