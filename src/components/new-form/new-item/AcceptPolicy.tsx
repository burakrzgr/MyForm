import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

export default function AcceptPolicy({ value, setValue }: { value: string, setValue: Function }) {
    const [text, setText] = useState<string>("I acknowledge that I have read and understood the above policies and procedures in its entirety and agree to abide by them.");
    return (
        <>
            <TextChanged textChanged={(vl:any) => setText(vl)}></TextChanged>
            <Form.Group controlId="formtextBoxPolicy">
                <Form.Label><h5></h5></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Write your policy to make it required field for submitting form."
                    value={value}
                    onChange={(vl: any) => setValue(vl.target.value)}
                    rows={5}
                    as="textarea"
                    style={{ resize: 'none' }}
                />
                <Form.Text className="text-muted">
                    The text you wrote above will be read-only.
                </Form.Text>
            </Form.Group>

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
                    id="button-addon-ac-pol"
                    onClick={optionAddedEvent}
                >
                    Alter Accept Policy Text
                </Button>
            </InputGroup>
        </>
    );
}