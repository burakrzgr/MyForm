import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";


export default function CheckValue({ }) {
    const [text, setText] = useState<string>("Check here!");
    return (
        <>
            <TextChanged textChanged={(vl: any) => setText(vl)}></TextChanged>
            <Form.Group className="mt-3">
                <Form.Check
                    type="checkbox"
                    label={text}
                    checked={false}
                    onChange={(e: any) => { }}
                ></Form.Check>
            </Form.Group>
        </>
    );
}

function TextChanged({ textChanged }: { textChanged: Function }) {
    const [text, setText] = useState<string>("");
    const optionAddedEvent = () => {
        if(text.replace(/\s/g,"") != "")
            textChanged(text);
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
                    variant={"warning"}
                    id="button-addon-alter"
                    onClick={optionAddedEvent}
                >
                    Alter Text
                </Button>
            </InputGroup>
        </>
    );
}