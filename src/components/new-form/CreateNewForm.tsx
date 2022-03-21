import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AddFieldButton from "./AddFieldButton"
import FieldDisplay from "./show-field/FieldDisplay";
import AskPersonnelInfo from "./custom-component/AskPersonnelInfo";
import mystyle from "../../mystyle";
import { FieldoForm } from "./class/FieldofForm";


export default function CreateNewForm() {
    const [personnelInfo, setPersonnelInfo] = React.useState<string>("0");
    const [formName, setFormName] = React.useState<string>("");
    const [formDesc, setFormDesc] = React.useState<string>("");
    const [areas,setAreas] = React.useState<{items:Array<FieldoForm>}>({items:[]})
    const newComponentAdded = (val : FieldoForm) => {
        let list = areas;
        list.items.push(val);
        setAreas({...list});
    }
    return (
        <Container className="pt-5">
            <Row>
                <Col className="text-start">
                    <h1>New Form</h1>
                </Col>
                <Col className="text-end">
                <Button variant="primary" type="submit" size="lg" disabled={!(formName && formName.length > 5)}>
                    Create New Form
                </Button>
                </Col>
            </Row>
            <hr></hr>
            <Form className="text-start">
                <Form.Group className="pt-4" controlId="formbasicName">
                    <Form.Label><h4>Form Name</h4></Form.Label>
                    <Form.Control type="text" placeholder="Form Name" value={formName} onChange={(vl : any) => setFormName(vl.target.value)} size="lg" />
                </Form.Group>
                <Form.Group className="pt-4" controlId="formbasicName">
                    <Form.Label><h6>Form Description</h6></Form.Label>
                    <Form.Control type="text" placeholder="Form Description" value={formDesc} onChange={(vl : any) => setFormDesc(vl.target.value)} />
                </Form.Group>
                <Form.Group className="pt-4 " controlId="formBasicPrInfo">
                    <Form.Label>Ask Personnel Information (Name, Surname, Identity Number...)</Form.Label>
                    <div style={mystyle.formControl}>
                        <AskPersonnelInfo selected={personnelInfo} selectedChanged={(vl: any) => setPersonnelInfo(vl)} ></AskPersonnelInfo>
                    </div>
                    <Form.Text className="text-muted">
                        Please notice that changing this area might/will force participant to share their personal information. Such as name and surname.
                    </Form.Text>
                </Form.Group>
                <FieldDisplay areas={areas} setAreas={setAreas} ></FieldDisplay>
            </Form>
            <div className="pt-5">
                <AddFieldButton addedHandle={newComponentAdded}></AddFieldButton>
            </div>
        </Container>
    );
}

