import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";
import { AnswerTemplate_Selection } from "../class/FieldofForm";

export function SelectionList({
        value,
        setValue,
      }: {
        value: AnswerTemplate_Selection;
        setValue: Function;
      }
) {
    const addNewOption = (vl: string) => {
        value.options = value.options??[];
        if (vl !== "" && value.options && !value.options.includes(vl)) {
            let list = value.options;
            list.push(vl);
            setValue({...value,options:list});
        }
    };
    const removeOption = (vl: string) => {
        let list = value.options ? value.options.filter(x => {
            return(x !== vl)
        }) : [];
        setValue({...value,options:list});
    };
    return (
        <>
            <Form.Group className="mb-3" controlId="chkIsMulti">
                <Form.Check
                    type="checkbox"
                    label="Allow Multi Select"
                    checked={value.multi??false}
                    onChange={(e: any) => setValue({...value, multi: e.target.checked})}
                ></Form.Check>
            </Form.Group>
            <AddOption optionAdded={addNewOption}></AddOption>
            <DisplayOptions list={value.options??[]} allowMulti={value.multi} ItemRemove={removeOption}></DisplayOptions>
        </>
    );
}
export function SelectionCombo({
    value,
    setValue,
  }: {
    value: AnswerTemplate_Selection;
    setValue: Function;
  }) {
    const addNewOption = (vl: string) => {
        value.options = value.options??[];
        if (vl !== "" && value.options && !value.options.includes(vl)) {
            let list = value.options;
            list.push(vl);
            setValue({...value,options:list});
        }
    };
    const removeOption = (vl: string) => {
        let list = value.options ? value.options.filter(x => {
            return(x !== vl)
        }):[];
        setValue({...value,options:list});
    };
    const [selected,setSelected] = useState<string>("");
    return (
        <>
            <AddOption optionAdded={addNewOption}></AddOption>
            <Stack direction="horizontal">
                <Form.Select aria-label="Select option" className="mt-3 control-shadow me-auto" onChange={(e) => setSelected(e.target.value)}>
                    <option value="-">[Please select one of the options...]</option>
                    {value.options ? value.options.map(i => (
                        <option value={i} key={i}>{i}</option>
                    )):<></>}
                </Form.Select>
                <Button variant="outline-danger ms-2 mt-3" onClick={() => removeOption(selected)}>🗑️</Button>
            </Stack>
        </>
    );
}

function DisplayOptions({ list, allowMulti, ItemRemove }: { list: string[]; allowMulti: boolean; ItemRemove: Function }) {
    return (
        <>
            {list.map((i) => (
                <Form.Group key={i} className="mt-3">
                    <Stack direction="horizontal">
                        <Form.Check
                            type={allowMulti ? "checkbox" : "radio"}
                            label={i}
                            checked={false}
                            onChange={(e: any) => { }}
                            className="me-auto"
                        ></Form.Check>
                        <Button size="sm" variant="outline-danger" onClick={() => ItemRemove(i)}>🗑️</Button>
                    </Stack>
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
            <InputGroup size="sm" className="control-shadow">
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
