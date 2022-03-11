import { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

export default function CheckValue({
  check,
  setCheck,
  text,
  setText,
}: {
  check: boolean;
  setCheck: Function;
  text: string;
  setText: Function;
}) {
    useEffect(() => {
        setText("Check me! Click me! But you can never break me!");
      }, [])
  //const [text, setText] = useState<string>("Check here!");
  return (
    <>
      <TextChanged textChanged={(vl: any) => setText(vl)}></TextChanged>
      <Form.Group className="mt-3">
        <Form.Check
          type="checkbox"
          label={text}
          checked={check}
          onChange={(e: any) => setCheck(e.target.checked)}
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
    if (text.replace(/\s/g, "") != "") textChanged(text);
  };
  return (
    <>
      <InputGroup size="sm">
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
