import { FieldoForm } from "./FieldofForm";

export type MyForm ={
    id : number;
    formName : string,
    formDesc : string,
    personalInfo : string,
    dateofCreate : string,
    questions : Array<FieldoForm>
};