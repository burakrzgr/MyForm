import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllForm } from "../../axios/new-form";
import MyTable from "../MyTable";
import { MyForm } from "../new-form/class/MyForm";
import TableHeader from "./TableHeader";

export default function FillFormList() {
  const [forms, setForms] = useState<{ list: MyForm[] }>({ list: [] });
  useEffect(() => {
    GetAllForm()
      .then((val) => setForms({ list: val.data }))
      .catch((e) => console.log("GetFormError", e));
  }, []);
const go = (id:number) => {
  console.log("my",id);
} 
  const { type } = useParams<{ type?: string }>();
  var list = forms.list.map(x => {return {...x, actions:[{text:"Fill This Form", action:() => go(x.id),variant :"primary"},{text:"Don't Ask Me", action:() => go(x.id),variant :"outline-danger"}]}});
  return (
    <>
      <p>Fill Form From List : {type}</p>
      {forms && forms.list ? forms.list.map((x) => (
        <p key={x.id}>x.formName</p>
      )) : <>Loading</>}
      {forms && forms.list && forms.list.length > 0 ?
       // console.log("ee",forms.list)
       
        <MyTable columns={TableHeader} data={list} actions={["Fill"]}></MyTable>
         : <></>}
    </>
  );
}
