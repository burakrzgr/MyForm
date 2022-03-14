import { Form, Stack } from "react-bootstrap";
import { FieldoForm } from "../class/FieldofForm";

export default function FieldHeader({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
  return (
    <>
      <Form.Label className="w-100">
        <Stack direction="horizontal">
          <div className="me-auto">
            <h5>{item.name}</h5>
          </div>
          <div className="text-info ps-2">
            <u>Up</u>
          </div>
          <div className="text-info ps-2">
            <u>Down</u>
          </div>
          <div className="text-success ps-2">
            <u>Edit</u>
          </div>
          <div className="text-danger ps-2" onClick={() => removeEvent(item) }>
            <u>Delete</u>
          </div>
        </Stack>
      </Form.Label>
    </>
  );
}
