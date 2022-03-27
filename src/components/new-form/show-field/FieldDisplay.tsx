import React from "react";
import { FieldoForm, QuestionTemplate } from "../class/FormTemplate";
import PopupForCondition from "../PopupForCondition";
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
              "1" : <TextField item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)} />,
              "2" : <TextArea item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "3" : <FieldSelect item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "4": <FieldCombo item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "5": <FieldCheck item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "6": <FieldDateTime item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "7": <FieldRate item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
              "8": <FieldAcceptPolicy item={i} removeEvent={(i: QuestionTemplate) => remove(i)} addConditionEvent={(i: QuestionTemplate) => addCondition(i)}/>,
            //  "info": <ShowInfo item={i} removeEvent={(i: QuestionTemplate) => remove(i)} />,
            }[String(i.questionType)]
          }
        </React.Fragment>
      ))}
    </>
  );
}
