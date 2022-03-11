import { useState } from "react";
import { Col, Form, FormControl, Row, Stack } from "react-bootstrap";


export default function DateTime() {
    const [date, setDate] = useState<boolean>(true);
    const [time, setTime] = useState<boolean>(true);
    return (
        <>
         <Form.Group className="mt-3">
                <Form.Check
                    type="checkbox"
                    label="Show Date"
                    checked={date}
                    onChange={(e: any) => { setDate(e.target.checked)}}
                ></Form.Check> 
                <Form.Check
                type="checkbox"
                label="Show Time"
                checked={time}
                onChange={(e: any) => { setTime(e.target.checked)}}
            ></Form.Check>
            </Form.Group>
            <Stack direction="horizontal">
                {date ?
                    <div className="p-2">
                        <Form.Label>Date</Form.Label>
                        <FormControl type="date" id="myDate" style={{ width: "10rem" }}></FormControl>
                    </div> : <></>
                }
                {time ?
                    <div className="p-2">
                        <Form.Label>Time</Form.Label>
                        <FormControl type="time" id="myTime" style={{ width: "10rem" }}></FormControl>
                    </div> : <></>
                }
                {(date || time)?<></>:<div className="text-danger p-2"><h5>This component useless!</h5></div>}
            </Stack>
        </>
    );
}