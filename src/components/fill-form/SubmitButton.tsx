import { useState } from "react";
import { Button } from "react-bootstrap";
import ConfirmMe from "../misc/ConfirmMe";


export default function SubmitButton({confirmedEvent,blurEvent}:{confirmedEvent:Function,blurEvent:Function}) {
    const [showModal,setShowModal] = useState(false);
    return (
        <div className="pt-3 pb-5">
            <Button variant="primary" size="lg" className="w-25" onClick={() => setShowModal(true)} >Submit Form</Button>
            <ConfirmMe 
                show={showModal} 
                rejectedEvent={() => setShowModal(false)} 
                header="Confirmation" 
                message="Submit form?" 
                confirmedEvent={() => {setShowModal(false);confirmedEvent()}} 
                variant="primary"
            ></ConfirmMe>
        </div>)
    
}