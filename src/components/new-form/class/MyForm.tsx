import { FieldoForm } from "./FormTemplate";

export type MyForm ={
    id : number;
    formName : string,
    formDesc : string,
    personalInfo : string,
    dateofCreate : string,
    questions : Array<FieldoForm>
};
