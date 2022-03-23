import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MyForm } from "../new-form/class/MyForm";
import FieldDisplay from "../new-form/show-field/FieldDisplay";
import mystyle from "../../mystyle";
import DisplayPersonnelInfo from "../new-form/custom-component/DisplayPersonnelInfo";
import { FieldoForm } from "../new-form/class/FieldofForm";
import { GetForm } from "../../axios/new-form";


export default function FillForm({}) {
    const [form,setForm] = useState<MyForm>();
    const { id } = useParams<string>();
    useEffect(() => {
        GetForm(Number(id))
        .then((val : MyForm) => setForm(val))
        .catch((e) => console.log("GetFormError", e));
    }, [id])
    
    return(
        <>
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
                        <DisplayPersonnelInfo selected={form ? form.personellInfo :""} selectedChanged={() => {}}></DisplayPersonnelInfo>
                    </div>
                    <Form.Text className="text-muted">
                        Please notice that changing this area might/will force participant to share their personal information. Such as name and surname.
                    </Form.Text>
                </Form.Group>
                <FieldDisplay areas={{items : form ? form.questions : ([] as Array<FieldoForm>)}} setAreas={() => {}} ></FieldDisplay>
            </Form>
            <div className="pt-5">
                <Button variant="primary" size="lg">Submit Form</Button>
            </div>
        </Container>
        </>);
}