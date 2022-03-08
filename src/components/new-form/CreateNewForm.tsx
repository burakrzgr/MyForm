import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import AddComponent from "./AddComponent"
import AskPersonnelInfo from "./AskPersonnelInfo";

export default function CreateNewForm() {  
    const [personnelInfo,setPersonnelInfo] = React.useState<string>("0");
    const [formName,setFormName] = React.useState<string>("");
    return (
        <Container >
            <h2>New Form</h2>
            <hr></hr>
            <h4>Form Name</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formbasicName">
                  
                    <Form.Label><h4>Form Name</h4></Form.Label>
                    <Form.Control type="text" placeholder="Form Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrInfo">
                    <Form.Label>Ask Personnel Information (Name, Surname, Identity Number...)</Form.Label>
                    <AskPersonnelInfo selected={personnelInfo} selectedChanged={(vl:any) => setPersonnelInfo(vl)} ></AskPersonnelInfo>
                    <Form.Text className="text-muted">
                        Please notice that checking this are will force surveyor to share their personal information. Such as name and surname. 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
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