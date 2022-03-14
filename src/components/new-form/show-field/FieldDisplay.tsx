import React from "react";
import { FieldoForm } from "../class/FieldofForm";
import { TextField,TextArea, FieldSelect, FieldCombo, FieldCheck, FieldDateTime, FieldRate, FieldAcceptPolicy} from "./Field";

export default function FieldDisplay({
  areas,
  setAreas,
}: {
  areas: { items: Array<FieldoForm> };
  setAreas: Function;
}) {

  const remove = (item :FieldoForm) => {
  let list = areas.items.filter(x => {return (x !== item)});
    setAreas({items:list});
  }
  return (
    <>
      {areas.items.map((i, key) => (
        <React.Fragment key={key}>
          {
            {
              "tx_b": <TextField item={i} removeEvent={(i : FieldoForm) => remove(i)} />,
              "tx_a": <TextArea item={i} removeEvent={(i : FieldoForm) => remove(i)}/>,
              "sel_": <FieldSelect item={i} removeEvent={(i : FieldoForm) => remove(i)}/>,
              "cm_b": <FieldCombo item={i} removeEvent={(i : FieldoForm) => remove(i)}/>,
              "ch_b": <FieldCheck item={i} removeEvent={(i : FieldoForm) => remove(i)}/>,
              "date": <FieldDateTime item={i} removeEvent={(i : FieldoForm) => remove(i)}/>,
              "rate": <FieldRate item={i} removeEvent={(i : FieldoForm) => remove(i)}/>,
              "ap_c": <FieldAcceptPolicy item={i} removeEvent={(i : FieldoForm) => remove(i)}/>,
            }[i.type]
          }
        </React.Fragment>
      ))}
    </>
  );
}
