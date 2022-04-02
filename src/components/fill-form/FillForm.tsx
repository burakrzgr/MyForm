import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import mystyle from "../../mystyle";
import DisplayPersonnelInfo from "../new-form/custom-component/DisplayPersonnelInfo";
import { enumPersonelInfo, FormTemplate, QuestionTemplate } from "../new-form/class/FormTemplate";
import { GetForm } from "../../axios/new-form";
import FillFieldDisplay from "./display-form/FillFieldDisplay";
import { FilledForm, FilledQuestion } from "./class/FilledForm";
import { getGuid } from "../new-form/class/Guid";

const EmptyFilledForm = ( val : FormTemplate) => {
    return (
        { 
            participantId : getGuid("me-me-me"), 
            template : {...val,questions : []}, 
            questions : val.questions.map(x => {
                return({ 
                        condition : [],
                        template : x,
                        answeredValue : {} 
                    } as FilledQuestion)})
        } as FilledForm);
}

export default function FillForm() {
    const [form, setForm] = useState<FilledForm>();
    const { id } = useParams<string>();
    useEffect(() => {
        GetForm(Number(id))
            .then((val) => setForm(EmptyFilledForm(val.data)))
            .catch((e) => console.log("GetFormError", e));
    }, [id])

    return (
        <>
        {console.log("dd",form)}
            {form ?
                <Container className="pt-5">
                    <Form className="text-start">
                        <Form.Group className="pt-4" controlId="formbasicName">
                            <Form.Label><h4>{form?.template.formName}</h4></Form.Label>
                        </Form.Group>
                        <Form.Group className="pt-4" controlId="formbasicName">
                            <Form.Label><h6>{form?.template.formDesc}</h6></Form.Label>
                        </Form.Group>
                        <Form.Group className="pt-4 " controlId="formBasicPrInfo">
                            <Form.Label>Ask Personnel Information (Name, Surname, Identity Number...)</Form.Label>
                            <div style={mystyle.formControl}>
                                <DisplayPersonnelInfo selected={form ? form.template.personalInfo : enumPersonelInfo.dontAsk} selectedChanged={() => { }}></DisplayPersonnelInfo>
                            </div>
                        </Form.Group>
                        <FillFieldDisplay items={form.questions as FilledQuestion[]} setItems={() => {}} ></FillFieldDisplay>
                    </Form>
                    <div className="pt-3 pb-5">
                        <Button variant="primary" size="lg" className="w-25" >Submit Form</Button>
                    </div>
                </Container>
                : <div>Yükleniyor!!</div>}
        </>);
}