import axios from "axios";
import { FilledForm } from "../components/fill-form/class/FilledForm";
import { FormTemplate } from "../components/new-form/class/FormTemplate";


export const GetForm =  (id:number) => {return axios.get("https://localhost:7213/Form/"+id);}
export const GetAllForm =  () => {return axios.get("https://localhost:7213/Form");}
export const GetFormCriteria =  (criteria:string) => {};
export const PostForm =  (id:number,form : FormTemplate) => {return axios.post("https://localhost:7213/Form",{...form,id:id})};
export const DeleteForm =  (id : number) => {};
export const PutForm =  (form : FormTemplate) => {return axios.put("https://localhost:7213/Form",form);};
export const PatchForm =  (form : any) => {};

export const PutFilledForm = (form : FilledForm) => {return axios.put("https://localhost:7213/FillForm",form);};