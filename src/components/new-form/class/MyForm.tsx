import { FieldoForm } from "./FieldofForm";

export type MyForm ={
    id : number;
    formName : string,
    formDesc : string,
    personellInfo : string,
    dateofCreate : string,
    questions : Array<FieldoForm>
};