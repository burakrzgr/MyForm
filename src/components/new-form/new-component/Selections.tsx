import { Form } from "react-bootstrap";


export function Selection() {
    return (
        <>
            <Form.Group className="mb-3" controlId="chkIsMulti">
                <Form.Label>Multi Select : </Form.Label>
                <Form.Check type="checkbox" label="Allow Multi Select" >Multi Select</Form.Check>
            </Form.Group>
        </>
    );
    
}