import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { defaultValues } from "../class/defaultValues";
import { AnswerTemplate_Check } from "../class/FormTemplate";

export default function AcceptPolicy({
  value,
  setValue,
}: {
  value: AnswerTemplate_Check;
  setValue: Function;
}) {  
  return (
    <>
      <TextChanged textChanged={(vl: any) => setValue({...value, checkText : vl})}></TextChanged>
      <Form.Group className="mt-3">
        <Form.Control
          type="text"
          placeholder="Write your policy to make it required field for submitting form."
          value={value.description}
          onChange={(vl: any) => setValue({...value, description : vl.target.value})}
          rows={5}
          as="textarea"
          style={{ resize: "none" }}
          className="control-shadow"
        />
        <Form.Text className="text-muted">
          The text you wrote above will be read-only.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Check
          type="checkbox"
          label={value.checkText??defaultValues.emptyAcceptPolicyText}
          checked={false}
          onChange={(e: any) => {}}
        ></Form.Check>
      </Form.Group>
    </>
  );
}

function TextChanged({ textChanged }: { textChanged: Function }) {
  const [text, setText] = useState<string>("");
  const optionAddedEvent = () => {
    if (text.replace(/\s/g, "") !== "") textChanged(text);
  };
  return (
    <>
      <InputGroup size="sm" className="control-shadow">
        <FormControl 
          placeholder="Add new option"
          aria-label="Add Option"
          aria-describedby="opt-addon"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <Button
          variant={"warning"}
          onClick={optionAddedEvent}
        >
          Alter Accept Policy Text
        </Button>
      </InputGroup>
    </>
  );
}
