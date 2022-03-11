import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

export function SelectionList({options,setOptions}:{options:{ items: string[] },setOptions:Function}) {
    const [multi, setMulti] = useState<boolean>(false);
    const addNewOption = (vl: string) => {
        if (vl !== "" && !options.items.includes(vl)) {
            let list = options;
            list.items.push(vl);
            setOptions({ ...list });
        }
    };
    return (
        <>
            <Form.Group className="mb-3" controlId="chkIsMulti">
                <Form.Check
                    type="checkbox"
                    label="Allow Multi Select"
                    checked={multi}
                    onChange={(e: any) => setMulti(e.target.checked)}
                ></Form.Check>
            </Form.Group>
            <AddOption optionAdded={addNewOption}></AddOption>
            <DisplayOptions list={options.items} allowMulti={multi}></DisplayOptions>
        </>
    );
}
export function SelectionCombo({options,setOptions}:{options:{ items: string[] },setOptions:Function}) {
    const addNewOption = (vl: string) => {
        if (vl !== "" && !options.items.includes(vl)) {
            let list = options;
            list.items.push(vl);
            setOptions({ ...list });
        }
    };
    return (
        <>
            <AddOption optionAdded={addNewOption}></AddOption>
            <Form.Select aria-label="Select option" className="mt-3">
                <option>[Please select one of the options...]</option>
                {options.items.map(i => (
                    <option value={i} key={i}>{i}</option>
                ))}
            </Form.Select>
        </>
    );
}

function DisplayOptions({ list, allowMulti }: { list: string[]; allowMulti: boolean; }) {
    return (
        <>
            {list.map((i) => (
                <Form.Group key={i} className="mt-3">
                    <Form.Check
                        type={allowMulti ? "checkbox" : "radio"}
                        label={i}
                        checked={false}
                        onChange={(e: any) => { }}
                    ></Form.Check>
                </Form.Group>
            ))}
        </>
    );
}

function AddOption({ optionAdded }: { optionAdded: Function }) {
    const [text, setText] = useState<string>("");
    const optionAddedEvent = () => {
        optionAdded(text);
        setText("");
    };
    return (
        <>
            <InputGroup size="sm">
                <FormControl
                    placeholder={"Add new option"}
                    aria-label="Add Option"
                    aria-describedby="opt-addon"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    value={text}
                />
                <Button
                    variant={"success"}
                    id="button-addon"
                    onClick={optionAddedEvent}
                >
                    Add New Option
                </Button>
            </InputGroup>
        </>
    );
}
