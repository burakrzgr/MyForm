import axios from "axios";
import { SubmitedForm } from "../components/fill-form/class/SubmitedForm";
import { FormTemplate } from "../components/new-form/class/FormTemplate";
import { baseApi } from "../config";
import { GetToken } from "../database/Token";

const getHeader = () => {
    console.log("tk",'Bearer ' + GetToken().token);
    return ({
        headers: {
          Authorization: 'Bearer ' + GetToken().token
        }});
}

export const GetForm =  (id:number) => {return axios.get(`${baseApi.link}/Form/${id}`);}
export const GetAllForm =  () => {return axios.get(`${baseApi.link}/Form`);}
export const GetFormCriteria =  (criteria:string) => {};
export const PostForm =  (id:number,form : FormTemplate) => {return axios.post(`${baseApi.link}/Form`,{...form,id:id}, getHeader())};
export const DeleteForm =  (id : number) => {};
export const PutForm =  (form : FormTemplate) => {return axios.post(`${baseApi.link}/Form`,form), getHeader()};
export const PatchForm =  (form : any) => {};

export const SubmitForm = (form : SubmitedForm) => {return axios.put(`${baseApi.link}/Submit`,form, getHeader())};

