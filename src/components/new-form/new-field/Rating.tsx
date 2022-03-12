import React, { useEffect } from "react";
import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";
import "../../../css/rating.css";
import Stars from "../custom-component/Stars";

export default function Rating({ count, setCount }: { count: number, setCount: Function }) {
    const setRowEvent = (val: number) => {
        if (val > 25) {
            setCount(20);
        }
        else if (val < 1) {
            setCount(5);
        }
        else {
            setCount(val);
        }

    }
    useEffect(() => {
        setCount(5)
      },[]);

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <div ><Form.Label>Area Height</Form.Label></div>
                <div ><InputGroup style={{ width: '9rem',backgroundColor:"white"}} className="control-shadow">
                    <Button variant="outline-danger" style={{ width: '2.5rem' }} onClick={() => setRowEvent(count - 1)}>-</Button>
                    <FormControl
                        type="Number"
                        placeholder="Number of Column"
                        aria-label="Inputgroupnoc"
                        className="text-center"
                        value={count}
                        onChange={(vl: any) => setRowEvent(vl.target.value)}
                    />
                    <Button variant="outline-success" style={{ width: '2.5rem' }} onClick={() => setRowEvent(count + 1)}>+</Button>
                </InputGroup>
                </div>
            </Stack>
                <Stars count={count}></Stars>
        </>
    );
}

