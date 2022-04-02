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


export type FilledFormValue_Text ={
    text : string
}
export type FilledFormValue_Selection ={
    selected : string[]
}
export type FilledFormValue_Check ={
    checked : boolean
}
export type FilledFormValue_Date ={
    date : string,
    time : string
}
export type FilledFormValue_Rate ={
    stars : number
}
export type FilledFormValue_Upload ={
    filePath : string[]
}

