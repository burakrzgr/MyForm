import React from "react";
import PopupForCondition from "../../new-form/PopupForCondition";
import { QuestionTemplate } from "../../new-form/class/FormTemplate";
import { FillFieldAcceptPolicy, FillFieldCheck, FillFieldCombo, FillFieldDateTime, FillFieldInfo, FillFieldRate, FillFieldSelect, FillFieldUpload, FillTextArea, FillTextField } from "./FillFields";
import ShowInfo from "../../new-form/show-field/ShowInfo";
import { Alert } from "react-bootstrap";

export default function FillFieldDisplay({
  items,
  setItems,
}: {
  items : Array<QuestionTemplate>;
  setItems : Function;
}) {

  const [condition, setCondition] = React.useState<{show:boolean,item:QuestionTemplate}>({show:false,item : {} as QuestionTemplate});

  const remove = (item: QuestionTemplate) => {
    let list = items.filter(x => { return (x !== item) });
    setItems(list);
  }
  const addCondition = (myitem: QuestionTemplate) => {
    setCondition({ show: true, item: myitem });
  }

  return (
    <>
      <PopupForCondition show={condition.show} closeHandle={() => setCondition({...condition,show: false})} item={condition.item} questions={items} conditionAddedEvent={() => {}} ></PopupForCondition>
      {items.map((i, key) => (
        <React.Fragment key={key}>
          {
            {
              "1": <FillTextField item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)} />,
              "2": <FillTextArea item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "3": <FillFieldSelect item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "4": <FillFieldCombo item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "5": <FillFieldCheck item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "6": <FillFieldDateTime item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "7": <FillFieldRate item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "8": <FillFieldUpload item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)} />,
              "9": <FillFieldAcceptPolicy item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "10": <FillFieldInfo item={i} /> ,
            }[String(i.questionType)]
          }
        </React.Fragment>
      ))}
    </>
  );
}
