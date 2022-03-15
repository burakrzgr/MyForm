import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetForm } from "../../axios/new-form";

export default function FillFormList() {
    useEffect(() => {
      GetForm(1).then(val => (console.log(val.data))
      ).catch(e => console.log("GetFormError",e));
      
    }, []);
    
    const { type } = useParams<{ type?: string }>();
    return (
        <p>Fill Form From List : {type}</p>
    );
}