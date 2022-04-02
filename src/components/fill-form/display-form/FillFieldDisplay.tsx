import React from "react";
import PopupForCondition from "../../new-form/PopupForCondition";
import { QuestionTemplate } from "../../new-form/class/FormTemplate";
import { FillFieldAcceptPolicy, FillFieldCheck, FillFieldCombo, FillFieldDateTime, FillFieldInfo, FillFieldRate, FillFieldSelect, FillFieldUpload, FillTextArea, FillTextField } from "./FillFields";
import { FilledForm, FilledQuestion } from "../class/FilledForm";


export default function FillFieldDisplay({
  items,
  setItems,
}: {
  items : Array<FilledQuestion>;
  setItems : Function;
}) {

const setProperItem = (n : FilledQuestion) => {
  console.log("ddd",n);
  setItems((pr:FilledForm)  => {return {...pr,questions:items.map(i => i.template === n.template?n:i)}});
}
  return (
    <>
      {items.map((i, key) => (
        <React.Fragment key={key}>
          {
            {
              "1": <FillTextField item={i} valueChangedEvent={(i: FilledQuestion) => setProperItem(i)} />,
              "2": <FillTextArea item={i} valueChangedEvent={(i: FilledQuestion) => setProperItem(i)} />,
              "3": <FillFieldSelect item={i} valueChangedEvent={(i: FilledQuestion) => setProperItem(i)} />,
              "4": <FillFieldCombo item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "5": <FillFieldCheck item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "6": <FillFieldDateTime item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "7": <FillFieldRate item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "8": <FillFieldUpload item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "9": <FillFieldAcceptPolicy item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "10": <FillFieldInfo item={i.template} /> ,
            }[String(i.template.questionType)]
          }
        </React.Fragment>
      ))}
    </>
  );
}
