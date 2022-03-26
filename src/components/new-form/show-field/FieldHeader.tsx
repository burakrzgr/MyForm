import { Form, Stack } from "react-bootstrap";
import { QuestionTemplate } from "../class/FieldofForm";

export default function FieldHeader({
  item,
  removeEvent,
  addConditionEvent,
}: {
  item: QuestionTemplate;
  removeEvent: Function;
  addConditionEvent: Function;
}) {
  return (
    <>
      <Form.Label className="w-100">
        <Stack direction="horizontal">
          <div className="me-auto">
            <h5>{item.questionText}</h5>
          </div>
          <Stack direction="horizontal">
            <div className="text-info ps-2">
              <u>Move</u>
            </div>
            <div
              className="text-warning ps-2"
              onClick={() => addConditionEvent(item)}
            >
              <u>Condition</u>
            </div>
            <div className="text-success ps-2">
              <u>Edit</u>
            </div>
            <div className="text-danger ps-2" onClick={() => removeEvent(item)}>
              <u>Delete</u>
            </div>
          </Stack>
        </Stack>
      </Form.Label>
    </>
  );
}
