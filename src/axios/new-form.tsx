import { FieldoForm } from "../components/new-form/class/FieldofForm";
import { MyForm } from "../components/new-form/class/MyForm";
import axios from "axios";


const GetForm =  (id:number) => {return axios.get("https://localhost:7213/Form/"+id);}
const GetFormCriteria =  (criteria:string) => {};
const postForm =  (id:number,form : MyForm) => {};
const deleteForm =  (id : number) => {};
const putForm =  (form : MyForm) => {};
const patchForm =  (form : any) => {};

const GetQuestion =  (id:number) => {};
const postQuestion =  (question : FieldoForm) => {};
const deleteQuestion =  (id : number) => {};
const putQuestion =  (question : FieldoForm) => {};
const patchQuestion =  (question : any) => {};