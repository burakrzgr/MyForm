import { FieldoForm } from "../components/new-form/class/FieldofForm";
import { MyForm } from "../components/new-form/class/MyForm";
import axios from "axios";


export const GetForm =  (id:number) => {return axios.get("https://localhost:7213/Form/"+id);}
export const GetFormCriteria =  (criteria:string) => {};
export const postForm =  (id:number,form : MyForm) => {};
export const deleteForm =  (id : number) => {};
export const putForm =  (form : MyForm) => {};
export const patchForm =  (form : any) => {};

export const GetQuestion =  (id:number) => {};
export const postQuestion =  (question : FieldoForm) => {};
export const deleteQuestion =  (id : number) => {};
export const putQuestion =  (question : FieldoForm) => {};
export const patchQuestion =  (question : any) => {};