import { FormTemplate, QuestionTemplate } from "../../new-form/class/FormTemplate";
import { GUID } from "../../new-form/class/Guid";


export type FilledForm = {
    id? : number,
    participantId : GUID,
    template : FormTemplate,
    questions : FilledQuestion[]
}

export type FilledQuestion = {
    id? : number,
    condition : DisplayCondition[]
    template : QuestionTemplate,
    answeredValue : any
}

export type DisplayCondition = {
    question : FilledQuestion,
    condition : Function
}