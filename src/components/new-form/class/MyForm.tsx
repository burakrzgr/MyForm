import { FieldoForm } from "./FieldofForm";

export type MyForm ={
    id : number;
    formName : string,
    PersonellInfo : string,
    DateofCreate : string,
    Questions : Array<FieldoForm>
};