import { useEffect } from "react";
import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";
import { AnswerTemplate_Text } from "../class/FormTemplate";

export function TextBox({
  value,
  setValue,
}: {
  value: AnswerTemplate_Text;
  setValue: Function;
}) {
  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Type default value if you have any"
          value={value.defaultText??""}
          className="control-shadow"
          onChange={(vl: any) => setValue({...value, defaultText: vl.target.value})}
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
  setValue
}: {
  value: AnswerTemplate_Text;
  setValue: Function;
}) {
  const setRowEvent = (val: number) => {
    if (val > 30) {
      setValue({...value,textHeight:30});
    } else if (val < 1) {
      setValue({...value,textHeight:3});
    } else {
      setValue({...value,textHeight:val});
    }
  };

  useEffect(() => {
    setValue({...value,textHeight:3})
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
              onClick={() => setRowEvent(value.textHeight - 1)}
            >
              -
            </Button>
            <FormControl
              type="Number"
              placeholder="Number of Column"
              aria-label="Inputgroupnoc"
              className="text-center "
              value={value.textHeight??3}
              onChange={(vl: any) => setRowEvent(vl.target.value)}
            />
            <Button
              variant="outline-success"
              style={{ width: "2.5rem" }}
              onClick={() => setRowEvent(value.textHeight + 1)}
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
          value={value.defaultText??""}
          onChange={(vl: any) => setValue({...value,defaultText :vl.target.value})}
          rows={value.textHeight}
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
