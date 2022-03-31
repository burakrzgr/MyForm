import { Form, Stack } from "react-bootstrap";
import { QuestionTemplate } from "../../new-form/class/FormTemplate";

export default function FillFieldHeader({
  item
}: {
  item: QuestionTemplate;
}) {
  return (
    <>
      <Form.Label className="w-100">
        <Stack direction="horizontal">
          <div className="me-auto">
            <h5>{item.questionText}</h5>
          </div>
          <Stack direction="horizontal">
            <div className="text-danger ps-2">
              <u>Mark</u>
            </div>
          </Stack>
        </Stack>
      </Form.Label>
    </>
  );
}
