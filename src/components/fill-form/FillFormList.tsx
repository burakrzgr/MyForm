import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GetAllForm } from "../../axios/new-form";
import { TableAction } from "../misc/class/TableAction";
import MyTable from "../misc/MyTable";
import { FormTemplate } from "../new-form/class/FormTemplate";
import TableHeader from "./TableHeader";


const getPersonelInfo = (info : string) => {
  return { 
    "0": <div className="text-success bg-dark btn m-0 pt-1 pb-1 ">Anonymous</div>,
    "1": <div className="text-warning bg-dark btn m-0 pt-1 pb-1 ">Only if accepts</div>,
    "2": <div className="text-danger bg-dark btn m-0 pt-1 pb-1 ">Required Field</div>
  } [info];
}
export default function FillFormList() {
  let navigate = useNavigate();
  const [forms, setForms] = useState<{ data: FormTemplate[], loading: number }>({ data: [] as FormTemplate[], loading: 0 });
  useEffect(() => {
    GetAllForm()
      .then((val) => setForms({ data: val.data, loading: 1 }))
      .catch((e) => { console.log("GetFormError", e); setForms({ data: [] as FormTemplate[], loading: 2 }) });
  }, []);
  const go = (id: number) => {
    navigate("/FillForm/" + id);
  } 
  const share = (id: number) => {
    navigate("/FillForm/" + id);
  }
  const getActions = (id: number): (Array<TableAction>) => {
    return [{ text: "Fill This Form", onClick: () => go(id), variant: "primary" }, { text: "Share", onClick: () => share(id), variant: "info" }];
  }
  var list = forms.data.map(x => { return { ...x, personalInfo : getPersonelInfo(String(x.personalInfo)) , actions: getActions(x.id) } });
  return (
    <Container>
      <div className="text-start pt-5 pb-4">
        <h3 style={{ fontWeight: "700" }}>List of forms that you can fill</h3>
        <hr />
        <h5 className="text-muted">Please select most suitable form to meet for your needs</h5>
      </div>
      {forms.loading === 0 ? <h4 className="p-5 text-info align-middle">Loading Data...</h4> : <></>}
      {forms.loading === 1 ? (forms.data.length > 0 ?
        <MyTable columns={TableHeader} data={list}></MyTable>
        : <h4 className="p-5 text-warning align-middle">Unfortunately there is any form that you can fill!</h4>) : <></>}
      {forms.loading === 2 ? <h4 className="p-5 text-danger align-middle">There is error in the system. Couldn't get data!</h4> : <></>}
    </Container>
  );
}
