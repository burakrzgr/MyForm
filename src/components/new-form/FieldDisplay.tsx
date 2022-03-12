import React from "react";
import { FieldoForm } from "./FieldofForm";
import { TextField,TextArea} from "./show-field/TextField";

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
        <React.Fragment key={key}> {console.log(i)}
          {
            {
              "tx_b": <TextField item={i} />,
              "tx_a": <TextArea item={i} />
              ,
              "sel_": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays
                    ? i.displays.map((t) => (t ? "true" : "false"))
                    : "no"}{" "}
                  - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
              "cm_b": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays
                    ? i.displays.map((t) => (t ? "true" : "false"))
                    : "no"}{" "}
                  - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
              "ch_b": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays
                    ? i.displays.map((t) => (t ? "true" : "false"))
                    : "no"}{" "}
                  - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
              "date": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays
                    ? i.displays.map((t) => (t ? "true" : "false"))
                    : "no"}{" "}
                  - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
              "rate": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays
                    ? i.displays.map((t) => (t ? "true" : "false"))
                    : "no"}{" "}
                  - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
              "ap_c": (
                <div key={key}>
                  name: {i.name} - type: {i.type} - val : {i.value} - opt:{" "}
                  {i.options} - disp:{" "}
                  {i.displays
                    ? i.displays.map((t) => (t ? "true" : "false"))
                    : "no"}{" "}
                  - cnt : {i.count} -chtee : {i.checkText}{" "}
                </div>
              ),
            }[i.type]
          }
        </React.Fragment>
      ))}
    </>
  );
}
