import { Alert, Form, Stack } from "react-bootstrap";
import { FieldoForm, QuestionTemplate } from "../class/FormTemplate";
import FieldHeader from "./FieldHeader";

const questionClass = "border rounded p-3 pt-2 mt-4 ";
export default function ShowInfo({ item,removeEvent,addConditionEvent }: { item: QuestionTemplate, removeEvent: Function, addConditionEvent: Function }) {
    return (
        <div className={questionClass}>
            <Form.Label className="w-100">
                <Stack direction="horizontal">
                <div className="me-auto">
                    <h5>Message</h5>
                </div>
                <div className="text-info ps-2">
                    <u>Move</u>
                </div>          
                <div
                    className="text-warning ps-2"
                    onClick={() => addConditionEvent(item)}
                    ><u>Condition</u>
                </div>
                <div className="text-success ps-2">
                    <u>Edit</u>
                </div>
                <div className="text-danger ps-2" onClick={() => removeEvent(item) }>
                    <u>Delete</u>
                </div>
                </Stack>
            </Form.Label>
            <Alert variant={item.answerArea.variant??"info"} onClose={() => {}} dismissible>
                {item.questionText}
            </Alert>
        </div>);
}