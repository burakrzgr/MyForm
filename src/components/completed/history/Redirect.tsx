import { Button, Form, FormControl, InputGroup } from "react-bootstrap";


export default function Redirect({ formId }: { formId: number }) {
    return (
        <>
            <InputGroup className="mt-3 control-shadow me-auto">
                <Form.Select aria-label="Select option" className="">
                    <option value="-">[Select the user you want to see...]</option>
                        <option value="1" >Person 1</option>
                        <option value="2" >Person 2</option>
                        <option value="3" >Person 3</option>
                </Form.Select>
                <Button variant="outline-danger" onClick={() => {}}>Send!</Button>
            </InputGroup>
        </>
    );
}