import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { defaultValues } from "../class/defaultValues";
import { AnswerTemplate_Check } from "../class/FormTemplate";

export default function CheckValue({
  value,
  setValue,
}: {
  value: AnswerTemplate_Check;
  setValue: Function;
}) {
 
  return (
    <>
      <TextChanged textChanged={(vl: any) => setValue({...value,checkText : vl})}></TextChanged>
      <Form.Group className="mt-3">
        <Form.Check
          type="checkbox"
          label={value.checkText??defaultValues.emptyChecktext}
          checked={value.defaultChecked??false}
          onChange={(e: any) => setValue({...value,defaultChecked : e.target.checked})}
        ></Form.Check>
        <Form.Text className="text-muted">
          If you check here, default value for this item will be checked!
        </Form.Text>
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
          placeholder={"Change check box text!"}
          aria-label="change check"
          aria-describedby="opt-chkon"
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
