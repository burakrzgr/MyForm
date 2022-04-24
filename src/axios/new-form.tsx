import axios, { AxiosRequestConfig } from "axios";
import { SubmitedForm } from "../components/fill-form/class/SubmitedForm";
import { FormTemplate } from "../components/new-form/class/FormTemplate";
import { baseApi } from "../config";
import { GetToken } from "../database/Token";

let configAuth: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer ' + GetToken().token
    }
}

export const GetForm =  (id:number) => {return axios.get(`${baseApi.link}/Form/${id}`);}
export const GetAllForm =  () => {return axios.get(`${baseApi.link}/Form`);}
export const GetFormCriteria =  (criteria:string) => {};
export const PostForm =  (id:number,form : FormTemplate) => {return axios.post(`${baseApi.link}/Form`,{...form,id:id}, configAuth)};
export const DeleteForm =  (id : number) => {return axios.delete(`${baseApi.link}/Form/${id}`, configAuth)};
export const PutForm =  (form : FormTemplate) => {return axios.post(`${baseApi.link}/Form`,form, configAuth)};
export const PatchForm =  (form : any) => {};

export const SubmitForm = (form : SubmitedForm) => {return axios.put(`${baseApi.link}/Submit`,form, configAuth)};
export const GetCompleted =  (id: number) => {return axios.get(`${baseApi.link}/View/${id}`,configAuth);}
export const GetAllCompleted =  () => {return axios.get(`${baseApi.link}/View`);}
