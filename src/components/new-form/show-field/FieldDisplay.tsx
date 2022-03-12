import React from "react";
import { FieldoForm } from "../FieldofForm";
import { TextField,TextArea, FieldSelect, FieldCombo, FieldCheck, FieldDateTime} from "./Field";

export default function FieldDisplay({
  areas,
  setAreas,
}: {
  areas: { items: Array<FieldoForm> };
  setAreas: Function;
}) {
  return (
    <>
      {areas.items.map((i, key) => (
        <React.Fragment key={key}>
          {
            {
              "tx_b": <TextField item={i} />,
              "tx_a": <TextArea item={i} />,
              "sel_": <FieldSelect item={i} />,
              "cm_b": <FieldCombo item={i} />,
              "ch_b": <FieldCheck item={i} />,
              "date": <FieldDateTime item={i} />,
              "rate": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays ? i.displays.toString():"no"}
                  - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
              "ap_c": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays ? i.displays.toString():"no"} - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
            }[i.type]
          }
        </React.Fragment>
      ))}
    </>
  );
}
