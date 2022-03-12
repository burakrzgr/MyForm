import { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";

export function TextBox({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) {
  return (
    <>
      <Form.Group controlId="formtextBox">
        <Form.Control
          type="text"
          placeholder="Type default value if you have any"
          value={value}
          className="control-shadow"
          onChange={(vl: any) => setValue(vl.target.value)}
        />
        <Form.Text className="text-muted">
          If you type anything here. It will appear as default value.
        </Form.Text>
      </Form.Group>
    </>
  );
}

export function TextArea({
  value,
  setValue,
  count,
  setCount,
}: {
  value: string;
  setValue: Function;
  count: number;
  setCount: Function;
}) {
  const setRowEvent = (val: number) => {
    if (val > 30) {
      setCount(30);
    } else if (val < 1) {
      setCount(3);
    } else {
      setCount(val);
    }
  };

  useEffect(() => {
    setCount(3)
  },[]);
  
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div>
          <Form.Label>Area Height</Form.Label>
        </div>
        <div>
          <InputGroup style={{ width: "9rem",backgroundColor:"white" }} className="control-shadow">
            <Button
              variant="outline-danger"
              style={{ width: "2.5rem" }}
              onClick={() => setRowEvent(count - 1)}
            >
              -
            </Button>
            <FormControl
              type="Number"
              placeholder="Number of Column"
              aria-label="Inputgroupnoc"
              className="text-center "
              value={count}
              onChange={(vl: any) => setRowEvent(vl.target.value)}
            />
            <Button
              variant="outline-success"
              style={{ width: "2.5rem" }}
              onClick={() => setRowEvent(count + 1)}
            >
              +
            </Button>
          </InputGroup>
        </div>
      </Stack>
      <Form.Group controlId="formtextBox">
        <Form.Label>
          <h5></h5>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Type default value if you have any"
          value={value}
          onChange={(vl: any) => setValue(vl.target.value)}
          rows={count}
          as="textarea"
          className="control-shadow"
          style={{ resize: "none" }}
        />
        <Form.Text className="text-muted">
          If you type anything here. It will appear as default value.
        </Form.Text>
      </Form.Group>
    </>
  );
}
