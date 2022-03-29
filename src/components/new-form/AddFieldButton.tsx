import React from "react";
import { Button } from "react-bootstrap";
import { QuestionTemplate } from "./class/FormTemplate";
import PopupForAdd from "./PopupForAdd";


export default function AddFieldButton({questionAddedEvent} : {questionAddedEvent:Function}) {
    const [showPopup,setShowPopup] = React.useState<boolean>(false);
    const showPopupHandler = () =>{
        setShowPopup(true);
    }
    const closePopupHandler = () =>{
        setShowPopup(false);
    }
    return (
      <>
        <Button
          variant="warning"
          onClick={showPopupHandler}
          className="w-25"
          size="lg"
        >
          Add New Criteria
        </Button>
        <PopupForAdd
          show={showPopup}
          closeHandle={closePopupHandler}
          questionAddedEvent={(qu: QuestionTemplate) => {
            setShowPopup(false);
            questionAddedEvent(qu);
          }}
        ></PopupForAdd>
      </>
    );
}