import axios from "axios";
import { FormTemplate } from "../components/new-form/class/FormTemplate";


export const GetForm =  (id:number) => {return axios.get("https://localhost:7213/Form/"+id);}
export const GetAllForm =  () => {return axios.get("https://localhost:7213/Form");}
export const GetFormCriteria =  (criteria:string) => {};
export const postForm =  (id:number,form : FormTemplate) => {return axios.post("https://localhost:7213/Form",{...form,id:id})};
export const deleteForm =  (id : number) => {};
export const putForm =  (form : FormTemplate) => {return axios.put("https://localhost:7213/Form",form);};
export const patchForm =  (form : any) => {};
