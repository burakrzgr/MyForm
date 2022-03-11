import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";
import "../../../css/rating.css";

export default function Rating() {
    const [row, setRow] = useState<number>(5);
    const setRowEvent = (val: number) => {
        if (val > 25) {
            setRow(25);
        }
        else if (val < 1) {
            setRow(5);
        }
        else {
            setRow(val);
        }

    }
    let starNumber : string[] = [];
    for (let index = row; index > 0; index--) {
        starNumber.push(String(index));
        
    }
    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <div ><Form.Label>Area Height</Form.Label></div>
                <div ><InputGroup style={{ width: '9rem' }}>
                    <Button variant="outline-danger" style={{ width: '2.5rem' }} onClick={() => setRowEvent(row - 1)}>-</Button>
                    <FormControl
                        type="Number"
                        placeholder="Number of Column"
                        aria-label="Inputgroupnoc"
                        className="text-center"
                        value={row}
                        onChange={(vl: any) => setRowEvent(vl.target.value)}
                    />
                    <Button variant="outline-success" style={{ width: '2.5rem' }} onClick={() => row < 30 ? setRowEvent(row + 1) : null}>+</Button>
                </InputGroup>
                </div>
            </Stack>
                <Stars list={starNumber}></Stars>
        </>
    );
}

function Stars({list}:{list:string[]}) {
    return (
        <div className="rating pt-3">
            {list.map(ix => 
                <React.Fragment key={ix}><Form.Control type="radio" name="rating" value={ix} id={ix}></Form.Control><label htmlFor={ix} >☆</label></React.Fragment>
            )}
        </div>
    );
    ////  <Form.Control type="radio" name="rating" value={inx} id={inx}></Form.Control><label htmlFor={inx}>☆</label>
}