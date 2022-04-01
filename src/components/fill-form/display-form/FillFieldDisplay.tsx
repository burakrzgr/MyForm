import React from "react";
import PopupForCondition from "../../new-form/PopupForCondition";
import { QuestionTemplate } from "../../new-form/class/FormTemplate";
import { FillFieldAcceptPolicy, FillFieldCheck, FillFieldCombo, FillFieldDateTime, FillFieldInfo, FillFieldRate, FillFieldSelect, FillFieldUpload, FillTextArea, FillTextField } from "./FillFields";
import { FilledQuestion } from "../class/FilledForm";

export default function FillFieldDisplay({
  items,
  setItems,
}: {
  items : Array<FilledQuestion>;
  setItems : Function;
}) {

  return (
    <>
      {items.map((i, key) => (
        <React.Fragment key={key}>
          {
            {
              "1": <FillTextField item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "2": <FillTextArea item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
              "3": <FillFieldSelect item={i} valueChangedEvent={(i: QuestionTemplate) => {}} />,
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
