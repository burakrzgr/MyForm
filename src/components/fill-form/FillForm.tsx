import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import mystyle from "../../mystyle";
import DisplayPersonnelInfo from "../new-form/custom-component/DisplayPersonnelInfo";
import { enumPersonelInfo, FormTemplate, QuestionTemplate } from "../new-form/class/FormTemplate";
import { GetForm, SubmitForm } from "../../axios/new-form";
import FillFieldDisplay from "./display-form/FillFieldDisplay";
import { FilledForm, FilledQuestion } from "./class/FilledForm";
import { getGuid } from "../new-form/class/Guid";
import SubmitButton from "./SubmitButton";
import { SubmitedForm, SubmittedQuestion } from "./class/SubmitedForm";


const GetFromTemplate = (template : QuestionTemplate) => {
    const result = {
        "1":{text : template.answerArea.defaultText},
        "2":{text : template.answerArea.defaultText},
        "3":{},
        "4":{},
        "5":{check : template.answerArea.defaultChecked},
        "6":{},
        "7":{},
        "8":{},
        "9":{},
        "10":{}
    }[template.questionType];
    return result;
}
const EmptyFilledForm = ( val : FormTemplate) => {
    return (
        { 
            participantId : getGuid("me-me-me"), 
            template : {...val,questions : []}, 
            questions : val.questions.map(x => {
                return({ 
                        condition : [],
                        template : x,
                        answeredValue : GetFromTemplate(x) 
                    } as FilledQuestion)})
        } as FilledForm);
}

export default function FillForm() {
    const [form, setForm] = useState<FilledForm>();
    const [blur, setBlur] = useState<boolean>(false);
    const { id } = useParams<string>();
    useEffect(() => {
        GetForm(Number(id))
            .then((val) => setForm(EmptyFilledForm(val.data)))
            .catch((e) => console.log("GetFormError", e));
    }, [id]);
    const postFilledForm = () =>{
        if(form) 
        {
            const submited = { id : form.id, templateId : form.template.id, PersonelInfoShared : true, participantId : form.participantId } as SubmitedForm;            //form.questions.map(x => { return({} as SubmittedQuestion)}) 
            submited.questions = form.questions.map(x => { return({id : x.id, templateId : x.template.id,answeredValue : x.answeredValue } as SubmittedQuestion)});
            SubmitForm(submited);
        }
    }

    return (
        <div className={blur?"confirm-me":""}>
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
                        <FillFieldDisplay items={form.questions as FilledQuestion[]} setItems={setForm} ></FillFieldDisplay>
                    </Form>
                    <SubmitButton confirmedEvent={() => postFilledForm()} blurEvent={(val :boolean) => setBlur(val)}></SubmitButton>
                </Container>
                : <div>Yükleniyor!!</div>}
        </div>);
}