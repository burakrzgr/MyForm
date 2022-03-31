import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import mystyle from "../../mystyle";
import DisplayPersonnelInfo from "../new-form/custom-component/DisplayPersonnelInfo";
import { enumPersonelInfo, FormTemplate, QuestionTemplate } from "../new-form/class/FormTemplate";
import { GetForm } from "../../axios/new-form";
import FillFieldDisplay from "./display-form/FillFieldDisplay";


export default function FillForm() {
    const [form, setForm] = useState<FormTemplate>();
    const { id } = useParams<string>();
    useEffect(() => {
        GetForm(Number(id))
            .then((val) => setForm(val.data))
            .catch((e) => console.log("GetFormError", e));
    }, [id])

    return (
        <>
        {console.log("dd",form)}
            {form ?
                <Container className="pt-5">
                    <Form className="text-start">
                        <Form.Group className="pt-4" controlId="formbasicName">
                            <Form.Label><h4>{form?.formName}</h4></Form.Label>
                        </Form.Group>
                        <Form.Group className="pt-4" controlId="formbasicName">
                            <Form.Label><h6>{form?.formDesc}</h6></Form.Label>
                        </Form.Group>
                        <Form.Group className="pt-4 " controlId="formBasicPrInfo">
                            <Form.Label>Ask Personnel Information (Name, Surname, Identity Number...)</Form.Label>
                            <div style={mystyle.formControl}>
                                <DisplayPersonnelInfo selected={form ? form.personalInfo : enumPersonelInfo.dontAsk} selectedChanged={() => { }}></DisplayPersonnelInfo>
                            </div>
                        </Form.Group>
                        <FillFieldDisplay items={form.questions as QuestionTemplate[]} setItems={() => {}} ></FillFieldDisplay>
                    </Form>
                    <div className="pt-5">
                        <Button variant="primary" size="lg">Submit Form</Button>
                    </div>
                </Container>
                : <div>Yükleniyor!!</div>}
        </>);
}