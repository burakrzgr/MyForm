import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AddComponent from "./AddComponent"
import AreasDisplay from "./AreasDisplay";
import AskPersonnelInfo from "./AskPersonnelInfo";
import mystyle from "../../mystyle";

class CompList{
    items : any[] = [];
}

export default function CreateNewForm() {
    const [personnelInfo, setPersonnelInfo] = React.useState<string>("0");
    const [formName, setFormName] = React.useState<string>("");
    const [areas,setAreas] = React.useState<{items:Array<string>}>({items:[]})
    const newComponentAdded = (vl : any) => {
        let _area = areas;
        _area.items.push(vl);
        setAreas({..._area});
    }
    return (
        <Container className="pt-5">
            <Row>
                <Col className="text-start">
                    <h2>New Form</h2>
                </Col>
                <Col className="text-end">
                <Button variant="primary" type="submit" size="lg">
                    Create New Form
                </Button>
                </Col>
            </Row>
            <hr></hr>
            <Form className="pt-5 text-start">
                <Form.Group className="pt-5" controlId="formbasicName">
                    <Form.Label><h5>Form Name</h5></Form.Label>
                    <Form.Control type="text" placeholder="Form Name" value={formName} onChange={(vl : any) => setFormName(vl.target.value)} />
                </Form.Group>
                <Form.Group className="pt-5 " controlId="formBasicPrInfo">
                    <Form.Label>Ask Personnel Information (Name, Surname, Identity Number...)</Form.Label>
                    <div style={mystyle.formControl}>
                        <AskPersonnelInfo selected={personnelInfo} selectedChanged={(vl: any) => setPersonnelInfo(vl)} ></AskPersonnelInfo>
                    </div>
                    <Form.Text className="text-muted">
                        Please notice that checking this are will force surveyor to share their personal information. Such as name and surname.
                    </Form.Text>
                </Form.Group>
                <AreasDisplay areas={areas} setAreas={setAreas} ></AreasDisplay>
            </Form>
            <div className="pt-5">
                <AddComponent addedHandle={newComponentAdded}></AddComponent>
            </div>
        </Container>
    );
}

