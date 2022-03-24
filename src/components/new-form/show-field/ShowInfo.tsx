import { Alert, Form, Stack } from "react-bootstrap";
import { FieldoForm } from "../class/FieldofForm";
import FieldHeader from "./FieldHeader";

const questionClass = "border rounded p-3 pt-2 mt-4 ";
export default function ShowInfo({ item,removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <div className={questionClass}>
            <Form.Label className="w-100">
                <Stack direction="horizontal">
                <div className="me-auto">
                    <h5>Message</h5>
                </div>
                <div className="text-info ps-2">
                    <u>Up</u>
                </div>
                <div className="text-info ps-2">
                    <u>Down</u>
                </div>
                <div className="text-warning ps-2">
                    <u>Condition</u>
                </div>
                <div className="text-success ps-2">
                    <u>Edit</u>
                </div>
                <div className="text-danger ps-2" onClick={() => removeEvent(item) }>
                    <u>Delete</u>
                </div>
                </Stack>
            </Form.Label>
            <Alert variant={item.variant} onClose={() => {}} dismissible>
                {item.name}
            </Alert>
        </div>);
}