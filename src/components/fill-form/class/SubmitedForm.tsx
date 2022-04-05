import { FormTemplate, QuestionTemplate } from "../../new-form/class/FormTemplate";
import { GUID } from "../../new-form/class/Guid";


export type SubmitedForm = {
    id? : number,
    participantId : GUID,
    templateId : number,
    PersonelInfoShared : boolean,
    questions : SubmittedQuestion[]
}
export type SubmittedQuestion = {
    id? : number,
    templateId : number,
    questionType : number,
    answeredValue : any
}