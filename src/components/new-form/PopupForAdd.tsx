import React, { useState,useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./form-input.css";


export default function PopupForAdd({ show, closeHandle, addedHandle }: { show: boolean, closeHandle: Function, addedHandle: Function }) {
    const[value,SetValue] = useState<string>("");
    
    const addCriteria=() =>{
        addedHandle(value);
    }

    useEffect(() => {
      SetValue("");
    }, [show])
    
    return (
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={() => closeHandle()}
            backdrop="static"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                >
                    Yeni Alan Ekle
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form.Group className="" controlId="formtextBox">
                    <Form.Label><h5>Form Name</h5></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Form Name" 
                        className="form-underline"
                        value={value} 
                        onChange={(vl : any) => SetValue(vl.target.value)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button variant="outline-dark" onClick={() => closeHandle()}>Cancel</Button>
                <Button variant="primary" onClick={() => addCriteria()}>Add Criteria</Button>
            </Modal.Footer>
        </Modal>
    );
}