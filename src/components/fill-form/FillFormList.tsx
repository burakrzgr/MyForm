import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetForm, GetAllForm } from "../../axios/new-form";
import { MyForm } from "../new-form/class/MyForm";

export default function FillFormList() {
  const [forms, setForms] = useState<{ list: MyForm[] }>({ list: [] });
  useEffect(() => {
    GetAllForm()
      .then((val) => setForms({list : val.data}))
      .catch((e) => console.log("GetFormError", e));
  }, []);

  const { type } = useParams<{ type?: string }>();
  return (
    <>
      <p>Fill Form From List : {type}</p>
      {console.log(forms)}
      {forms && forms.list ?forms.list.map((x) => (
        <p key={x.id}>x.formName</p>
      )):<>Loading</>}
    </>
  );
}
