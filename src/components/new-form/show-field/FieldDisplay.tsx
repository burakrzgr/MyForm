import React from "react";
import { FieldoForm, QuestionTemplate } from "../class/FieldofForm";
import { TextField, TextArea, FieldSelect, FieldCombo, FieldCheck, FieldDateTime, FieldRate, FieldAcceptPolicy } from "./Field";

export default function FieldDisplay({
  areas,
  setAreas,
  items,
  setItems,
}: {
  areas: { items: Array<FieldoForm> };
  setAreas: Function;
  items : Array<QuestionTemplate>;
  setItems : Function;
}) {

  const remove = (item: QuestionTemplate) => {
    let list = items.filter(x => { return (x !== item) });
    setItems(list);
  }
  return (
    <>
      {items.map((i, key) => (
        <React.Fragment key={key}>
          {
            {
              "1" : <TextField item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
              "2" : <TextArea item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
              "3" : <FieldSelect item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
              "4": <FieldCombo item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
              "5": <FieldCheck item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
              "6": <FieldDateTime item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
              "7": <FieldRate item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
              "8": <FieldAcceptPolicy item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
            //  "info": <ShowInfo item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
            }[String(i.questionType)]
          }
        </React.Fragment>
      ))}
    </>
  );
}
