import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
  var list = forms.list.map(x => {return {...x, actions:[{text:"Fill This Form", action:() => go(x.id),variant :"primary"},{text:"Don't Ask Me Ever Again", action:() => go(x.id),variant :"outline-danger"}]}});
  return (
    <Container>
      <div className="text-start pt-5 pb-4">
        <h3 style={{fontWeight:"700"}}>List of forms that you can fill</h3>
        <hr />
        <h5 className="text-muted">Please select most suitable form to meet for your needs</h5>
      </div>
      {forms && forms.list && forms.list.length > 0 ?
        <MyTable columns={TableHeader} data={list} actions={["Fill"]}></MyTable>
         : <></>}
    </Container>
  );
}
