import { GUID } from "./Guid";

export type FieldoForm ={
    name : string,
    type : string,
    value? : string,
    options? : string[],
    count? : number,
    checkText? : string,
    variant? : string,
    displays? : Display
};

export type Display ={
    checked:boolean, 
    multi:boolean, 
    date:boolean,
    time:boolean 
};


export type FormTemplate = {
    id : number,
    creatorId : GUID,
    formName : string,
    formDesc : string,
    personalInfo : enumPersonelInfo,
    createDate : Date,
    questions : Array<QuestionTemplate>,

}

export type QuestionTemplate = {
    id : number,
    formTemplate? : FormTemplate,
    questionType : enumQuestionType,
    questionText : string,
    answerArea : any,
}

export type AnswerTemplate_Text ={
    defaultText : string,
    textHeight : number 
}

export type AnswerTemplate_Selection ={
    templateId? : number,
    options? : string[],
    multi : boolean
}
export type AnswerTemplate_Check ={
    checkText? : string,
    defaultChecked? : boolean,
    description : string
}
export type AnswerTemplate_Date ={
    checkDate : boolean,
    checkTime : boolean
}
export type AnswerTemplate_Rate ={
    stars : number
}
export type AnswerTemplate_Upload ={
    multi : boolean,
    fileTypes? : string[]
}

export enum enumQuestionType
{
    TextBox = 1,
    TextArea = 2,
    RadioButton = 3,
    ComboBox = 4,
    CheckBox = 5,
    DateTime = 6,
    Rate = 7,
    Upload = 8,
    Acceptpolicy = 9,
    Info = 10
}
export enum enumPersonelInfo
{
    dontAsk = 0,
    ask = 1,
    required = 2
}