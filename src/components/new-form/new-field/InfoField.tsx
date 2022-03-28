import { Alert } from "react-bootstrap";
import { AnswerTemplate_Info } from "../class/FormTemplate";
import VariantPicker from "../custom-component/VariantPicker";


export default function InfoField({
    text,
    value,
    setValue,
  }: {
    text:string;
    value: AnswerTemplate_Info;
    setValue: Function;
  }) {
    
    return(
        <>
            <VariantPicker infoType={value.variant} setInfoType={(val:string) => setValue({...value,variant : val})}></VariantPicker>
            <Alert variant={value.variant} dismissible={value.dismissive}>
                {text ? text : value.variant+"!"}
            </Alert>
        </>)
    
}