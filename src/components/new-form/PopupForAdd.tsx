import React, { useState,useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import SelectCriteriaType from "./SelectCriteriaType";
import "./form-input.css";
import mystyle from "../../mystyle";


export default function PopupForAdd({ show, closeHandle, addedHandle }: { show: boolean, closeHandle: Function, addedHandle: Function }) {
    
    const[value,setValue] = useState<string>("");
    const[type,setType] = useState<string>("");
    const addCriteria=() =>{
        addedHandle(value);
    }

    useEffect(() => {
      setValue("");
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
                        onChange={(vl : any) => setValue(vl.target.value)} />
                </Form.Group>
                <Form.Group className="" controlId="formtextBox">
                    <Form.Label className="pt-3">Item Type</Form.Label>
                    <div style={mystyle.formControl}>
                        <SelectCriteriaType selected={type} selectedChanged={(vl: any) => setType(vl)} ></SelectCriteriaType>
                    </div>
                </Form.Group>
                <hr />
                {
                    {
                        "tx_b" : <>Bişeyler Büyük</>,
                        "tx_a" : <>Selamlar</>,
                    }[value]
                }
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button variant="outline-dark" onClick={() => closeHandle()}>Cancel</Button>
                <Button variant="primary" onClick={() => addCriteria()}>Add Criteria</Button>
            </Modal.Footer>
        </Modal>
    );
}