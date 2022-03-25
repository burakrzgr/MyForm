import React from "react";
import { Button } from "react-bootstrap";
import { QuestionTemplate } from "./class/FieldofForm";
import PopupForAdd from "./PopupForAdd";


export default function AddFieldButton({addedHandle,questionAddedEvent} : {addedHandle:Function,questionAddedEvent:Function}) {
    const [showPopup,setShowPopup] = React.useState<boolean>(false);
    const showPopupHandler = () =>{
        setShowPopup(true);
    }
    const closePopupHandler = () =>{
        setShowPopup(false);
    }
    const addedItem = (vl:any) =>{
        addedHandle(vl);
        setShowPopup(false);
    }
    return (
        <>
            <Button variant="warning" onClick={showPopupHandler} className="w-25" size="lg">Add New Criteria</Button>
            <PopupForAdd show={showPopup} closeHandle={closePopupHandler} addedHandle={addedItem} questionAddedEvent={(qu : QuestionTemplate) => questionAddedEvent(qu)}></PopupForAdd>
        </>
    );
}