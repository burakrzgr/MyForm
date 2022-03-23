import { Alert, Form } from "react-bootstrap";
import { FieldoForm } from "../class/FieldofForm";
import FieldHeader from "./FieldHeader";

const questionClass ="border rounded p-3 pt-2 mt-4 ";
export default function ShowInfo({ item, removeEvent }: { item: FieldoForm, removeEvent: Function }) {
    return (
        <>
            <Alert variant="danger" onClose={() => removeEvent(item)} dismissible>
                <Alert.Heading> <FieldHeader item={item} removeEvent={removeEvent}></FieldHeader></Alert.Heading>
                <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        </>);
}