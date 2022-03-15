import React from "react";
import { Form } from "react-bootstrap";

export default function Stars({count}:{count:number}) {
    let starNumber : string[] = [];
    for (let index = count; index > 0; index--) {
        starNumber.push(String(index));
    }
    return (
        <div className="rating ">
            {starNumber.map(ix => 
                <React.Fragment key={ix}><Form.Control type="radio" name="rating" value={ix} id={ix}></Form.Control><label htmlFor={ix} >☆</label></React.Fragment>
            )}
        </div>
    );
}