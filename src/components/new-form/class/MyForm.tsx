import { FieldoForm } from "./FieldofForm";

export type MyForm ={
    id : number;
    formName : string,
    personellInfo : string,
    dateofCreate : string,
    questions : Array<FieldoForm>
};