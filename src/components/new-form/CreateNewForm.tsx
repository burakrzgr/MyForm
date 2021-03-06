import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AddFieldButton from "./AddFieldButton"
import FieldDisplay from "./show-field/FieldDisplay";
import mystyle from "../../mystyle";
import { enumPersonelInfo, FormTemplate, QuestionTemplate } from "./class/FormTemplate";
import { getGuid } from "./class/Guid";
import AskPersonalInfo from "./custom-component/AskPersonnelInfo";
import { PutForm } from "../../axios/new-form";


var lastClientId : number = 0;
export default function CreateNewForm() {
    const [formInfo, setFormInfo] = React.useState<FormTemplate>({
      personalInfo: enumPersonelInfo.dontAsk,
      formName: "",
      formDesc: "",
      createDate: new Date(),
      questions : [] as QuestionTemplate[],
      id : 0,
      creatorId : getGuid("development-dev")
    } as FormTemplate);
       
    const newQuestionAdded = (qu : QuestionTemplate) => {
        let list = formInfo.questions;
        list.push({...qu,clientId : lastClientId++});
        setFormInfo({...formInfo, questions : list});
        console.log(formInfo);
    }
    const postNewForm = () => {
        PutForm(formInfo);
    }
    return (
        <Container className="pt-5">
            <Row>
                <Col className="text-start">
                    <h1>New Form</h1>
                </Col>
                <Col className="text-end">
                <Button variant="primary" type="submit" size="lg" disabled={!(formInfo.formName && formInfo.formName.length > 5)} onClick={() => postNewForm()}>
                    Create New Form
                </Button>
                </Col>
            </Row>
            <hr></hr>
            <Form className="text-start">
                <Form.Group className="pt-4" controlId="formbasicName">
                    <Form.Label><h4>Form Name</h4></Form.Label>
                    <Form.Control type="text" placeholder="Form Name" value={formInfo.formName} onChange={(vl : any) => setFormInfo({...formInfo,formName:vl.target.value})} size="lg" />
                </Form.Group>
                <Form.Group className="pt-4" controlId="formbasicName">
                    <Form.Label><h6>Form Description</h6></Form.Label>
                    <Form.Control type="text" placeholder="Form Description" value={formInfo.formDesc} onChange={(vl : any) => setFormInfo({...formInfo,formDesc:vl.target.value})} />
                </Form.Group>
                <Form.Group className="pt-4 " controlId="formBasicPrInfo">
                    <Form.Label>Ask Personnel Information (Name, Surname, Identity Number...)</Form.Label>
                    <div style={mystyle.formControl}>
                        <AskPersonalInfo selected={formInfo.personalInfo} selectedChanged={(vl: enumPersonelInfo) => setFormInfo({...formInfo,personalInfo:vl })} ></AskPersonalInfo>
                    </div>
                    <Form.Text className="text-muted">
                        Please notice that changing this area might/will force participant to share their personal information. Such as name and surname.
                    </Form.Text>
                </Form.Group>
                <FieldDisplay setItems={(list : QuestionTemplate[]) => setFormInfo({...formInfo,questions:list })} items={formInfo.questions}  ></FieldDisplay>
            </Form>
            <div className="pt-5 pb-5">
                <AddFieldButton questionAddedEvent={(qu : QuestionTemplate) => newQuestionAdded(qu)}></AddFieldButton>
            </div>
        </Container>
    );
}

