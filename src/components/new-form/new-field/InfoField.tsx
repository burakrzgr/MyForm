import { Alert } from "react-bootstrap";
import VariantPicker from "../custom-component/VariantPicker";


export default function InfoField({text,infoType,setInfoType,closable,setClosable}:{text:string,infoType:string, setInfoType:Function,closable:boolean,setClosable:Function}) {
    
    return(
        <>
            <VariantPicker infoType={infoType} setInfoType={setInfoType}></VariantPicker>
            <Alert variant={infoType} dismissible={closable}>
                {text ? text : infoType+"!"}
            </Alert>
        </>)
    
}