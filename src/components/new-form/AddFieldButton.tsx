import React from "react";
import { Button } from "react-bootstrap";
import PopupForAdd from "./PopupForAdd";


export default function AddFieldButton({addedHandle} : {addedHandle:Function}) {
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
            <Button variant="warning" onClick={showPopupHandler}>Add New Criteria</Button>
            <PopupForAdd show={showPopup} closeHandle={closePopupHandler} addedHandle={addedItem}></PopupForAdd>
        </>
    );
}