import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import AddComponent from "./AddComponent"
import AskPersonnelInfo from "./AskPersonnelInfo";

export default function CreateNewForm() {
    const [personnelInfo, setPersonnelInfo] = React.useState<string>("0");
    const [formName, setFormName] = React.useState<string>("");
    return (
        <Container className="pt-5">
            <h2>New Form</h2>
            <hr></hr>
            <Form className="pt-5 text-start">
                <Form.Group className="pt-5" controlId="formbasicName">
                    <Form.Label><h5>Form Name</h5></Form.Label>
                    <Form.Control type="text" placeholder="Form Name" />
                </Form.Group>
                <Form.Group className="pt-5 " controlId="formBasicPrInfo">
                    <Form.Label>Ask Personnel Information (Name, Surname, Identity Number...)</Form.Label>
                    <div style={styles.formControl}>
                        <AskPersonnelInfo selected={personnelInfo} selectedChanged={(vl: any) => setPersonnelInfo(vl)} ></AskPersonnelInfo>
                    </div>
                    <Form.Text className="text-muted">
                        Please notice that checking this are will force surveyor to share their personal information. Such as name and surname.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="pt-5" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create New Form
                </Button>
            </Form>
            <AddComponent></AddComponent>
        </Container>
    );
}

const styles = {
    formControl: {
        padding: '.375rem .75rem'
    }
  } as const;