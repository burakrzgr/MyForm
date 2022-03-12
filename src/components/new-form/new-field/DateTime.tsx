import { useState } from "react";
import { Form, FormControl, Row, Stack } from "react-bootstrap";
import {TringleExclamationSolid} from "../../../FontAwesome/fontAwesome"

export default function DateTime({check,setCheck}: {check: boolean[]; setCheck: Function}) {
    const date=1;
    const time=2;
    return (
        <>
         <Form.Group className="mt-3">
                <Form.Check
                    type="checkbox"
                    label="Show Date"
                    checked={check[date]}
                    onChange={(e: any) => setCheck(date,e.target.checked)}
                ></Form.Check> 
                <Form.Check
                type="checkbox"
                label="Show Time"
                checked={check[time]}
                onChange={(e: any) => setCheck(time,e.target.checked)}
            ></Form.Check>
            </Form.Group>
            <Stack direction="horizontal">
                {check[date] ?
                    <div className="p-2">
                        <Form.Label>Date</Form.Label>
                        <FormControl type="date" id="myDate" style={{ width: "10rem" }} className="control-shadow"></FormControl>
                    </div> : <></>
                }
                {check[time] ?
                    <div className="p-2">
                        <Form.Label>Time</Form.Label>
                        <FormControl type="time" id="myTime" style={{ width: "10rem" }} className="control-shadow"></FormControl>
                    </div> : <></>
                }
                {(check[date] || check[time])?<></>:<div className="alert alert-danger p-2 ps-4 pe-4 mt-4 "><Stack direction="horizontal"><div style={{width:"1.7rem",height:"1.7rem",filter: "invert(27%) sepia(49%) saturate(3040%) hue-rotate(333deg) brightness(94%) contrast(90%)"}} className="text-danger me-1"><TringleExclamationSolid  /></div><div>This component is useless right now! Please select at least one item!</div></Stack></div>}
            </Stack>
        </>
    );
}