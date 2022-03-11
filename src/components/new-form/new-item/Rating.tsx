import React, { useEffect } from "react";
import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";
import "../../../css/rating.css";

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

    let starNumber : string[] = [];
    for (let index = count; index > 0; index--) {
        starNumber.push(String(index));
        
    }
    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <div ><Form.Label>Area Height</Form.Label></div>
                <div ><InputGroup style={{ width: '9rem' }}>
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