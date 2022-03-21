import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GetAllForm } from "../../axios/new-form";
import { TableAction } from "../misc/class/TableAction";
import MyTable from "../misc/MyTable";
import { MyForm } from "../new-form/class/MyForm";
import TableHeader from "./TableHeader";

export default function FillFormList() {
  const [forms, setForms] = useState<{ list: MyForm[] }>({ list: [] });
  useEffect(() => {
    GetAllForm()
      .then((val) => setForms({ list: val.data }))
      .catch((e) => console.log("GetFormError", e));
  }, []);
  const go = (id: number) => {
    console.log("my", id);
  }
  const getActions = (id: number) : (Array<TableAction>) => {
    return [{ text: "Fill This Form", onClick: () => go(id), variant: "primary" }, { text: "No no no!", onClick: () => go(id), variant: "outline-danger" }];
  }
  const { type } = useParams<{ type?: string }>();
  var list = forms.list.map(x => { return { ...x, actions: getActions(x.id) } });
  return (
    <Container>
      <div className="text-start pt-5 pb-4">
        <h3 style={{ fontWeight: "700" }}>List of forms that you can fill</h3>
        <hr />
        <h5 className="text-muted">Please select most suitable form to meet for your needs</h5>
      </div>
      {forms && forms.list && forms.list.length > 0 ?
        <MyTable columns={TableHeader} data={list}></MyTable>
        : <></>}
    </Container>
  );
}
