import React from "react";
import { Button } from "react-bootstrap";
import PopupForAdd from "./PopupForAdd";


export default function AddComponent() {

    const [showPopup,setShowPopup] = React.useState<boolean>(false);

    const showPopupHandler = () =>{
        setShowPopup(true);
    }
     const closePopupHandler = () =>{
        setShowPopup(false);
    }
    return (
        <>
            <Button variant="alert" onClick={showPopupHandler}>Add Button</Button>
            <PopupForAdd show={showPopup} closeHandle={closePopupHandler}></PopupForAdd>
        </>
    );
}