import { useState } from "react";
import { Col, Form, FormControl, Row, Stack } from "react-bootstrap";


export default function DateTime() {
    const [date, setDate] = useState<boolean>(true);
    const [time, setTime] = useState<boolean>(true);
    return (
        <>
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
            </Stack>
        </>
    );
}