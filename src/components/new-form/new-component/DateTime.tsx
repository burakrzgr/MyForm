import { Col, Form, FormControl, Row, Stack } from "react-bootstrap";


export default function DateTime() {
    return (
        <>

            <Stack direction="horizontal">
                <div className="p-2">
                    <Form.Label>Date</Form.Label>
                    <FormControl type="date" id="myDate" style={{ width: "10rem" }}></FormControl>
                </div>
                <div className="p-2">
                    <Form.Label>Time</Form.Label>
                    <FormControl type="time" id="myTime" style={{ width: "10rem" }}></FormControl>
                </div>
            </Stack>
        </>
    );
}