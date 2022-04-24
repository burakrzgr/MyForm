import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DeleteForm, GetAllCompletedForm } from "../../axios/new-form";
import { TableAction } from "../misc/class/TableAction";
import ConfirmMe from "../misc/ConfirmMe";
import MyTable from "../misc/MyTable";
import { CompletedForm } from "./class/CompletedForm";
import TableHeader from "./TableHeader";


const getPersonelInfo = (info : string) => {
  return { 
    "0": <div className="text-success bg-dark btn m-0 pt-1 pb-1 soft-shadow">Anonymous</div>,
    "1": <div className="text-warning bg-dark btn m-0 pt-1 pb-1 soft-shadow">Only if accepts</div>,
    "2": <div className="text-danger bg-dark btn m-0 pt-1 pb-1 soft-shadow">Required Field</div>
  } [info];
}
export default function CompletedList() {
  let navigate = useNavigate();
  const [forms, setForms] = useState<{ data: CompletedForm[], loading: number }>({ data: [] as CompletedForm[], loading: 0 });
  const [deleteForm,setDeleteForm] = useState<{id:number,show:boolean}>({id:0,show:false});

  const loadData = () => {
    GetAllCompletedForm()
      .then((val) => setForms({ data: val.data, loading: 1 }))
      .catch((e) => { console.log("GetFormError", e); setForms({ data: [] as CompletedForm[], loading: 2 }) });
  }
  useEffect(() => {
    loadData();
  }, []);
  const go = (id: number) => {
    navigate("/FillForm/" + id);
  } 
  const $delete = (id: number) => {
    setDeleteForm({id:0,show:false});
    DeleteForm(id).then(x => {return x.data? loadData():""}).catch(x => console.log(x));
  }
  
  const getActions = (id: number): (Array<TableAction>) => {
    return [
      { text: "View", onClick: () => go(id), variant: "warning" }, 
      { text: "Revoke", onClick: () => setDeleteForm({id: id,show:true}), variant: "danger" }];
  }
  var list = forms.data.map(x => { return { ...x, personalInfo : getPersonelInfo(String(x.personalInfoShared)) , actions: getActions(x.id) } });
  return (
    <Container>
      <div className="text-start pt-5 pb-4">
        <h3 style={{ fontWeight: "700" }}>List of completed forms.</h3>
        <hr />
        <h5 className="text-muted">This Forms Filled by you. Select one to view details.</h5>
      </div>
      {forms.loading === 0 ? <h4 className="p-5 text-info align-middle">Loading Data...</h4> : <></>}
      {forms.loading === 1 ? (forms.data.length > 0 ?
        <MyTable columns={TableHeader} data={list}></MyTable>
        : <h4 className="p-5 text-warning align-middle">Unfortunately there is no form that you can fill!</h4>) : <></>}
      {forms.loading === 2 ? <h4 className="p-5 text-danger align-middle">There is error in the system. Couldn't get data!</h4> : <></>}
      <ConfirmMe 
          show={deleteForm.show} 
          rejectedEvent={() => setDeleteForm({id:0, show: false})} 
          header="Confirm revoke" 
          message="Do you really want to revoke this form? It won't be viewed by form creaters anymore." 
          confirmedEvent={() => $delete(deleteForm.id)} 
          variant="danger"
      ></ConfirmMe>
    </Container>
  );
}
