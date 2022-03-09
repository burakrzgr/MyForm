import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function SelectCriteriaType({selected,selectedChanged }:{selected:string,selectedChanged:Function}) {

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        selectedChanged(event.target.value);
      };


    let listofType: { val: string, name: string }[] = [
        { "val": "tx_b", "name": "Text Box" },
        { "val": "tx_a", "name": "Text Area" },
        { "val": "rb", "name": " Radio Button" },
        { "val": "cm_b", "name": "Combo Box" },
        { "val": "ch_b", "name": "Check Box" },
        { "val": "rate", "name": "Rate" },
        { "val": "ap", "name": "Accept Policy" }
    ];
    
    return(
    <ButtonGroup>
        {listofType.map(i => 
             <ToggleButton
             key={i.val}
             type="radio"
             id={"rbt-crt-"+i.val}
             variant="outline-info"
             name="radio"
             value={i.val}
             checked={i.val === selected}
             onChange={radioHandler}
         >
             {i.name}
     </ToggleButton>            
        )}
         
    </ButtonGroup>
    );
}





/*

   <ToggleButton
                type="radio"
                id="rbt-crt-1"
                variant="outline-info"
                name="radio"
                value="1"
                checked={"1" === selected}
                onChange={radioHandler}
            >
                Text Area  
        </ToggleButton>
            <ToggleButton
                type="radio"
                id="rbt-crt-2"
                variant="outline-info"
                name="radio"
                value="2"
                checked={"2" === selected}
                onChange={radioHandler}
            >
                Radio Button
        </ToggleButton>
        <ToggleButton
                type="radio"
                id="rbt-crt-3"
                variant="outline-info"
                name="radio"
                value="3"
                checked={"3" === selected}
                onChange={radioHandler}
            >
                Combo Box
        </ToggleButton>
        <ToggleButton
                type="radio"
                id="rbt-crt-5"
                variant="outline-info"
                name="radio"
                value="5"
                checked={"5" === selected}
                onChange={radioHandler}
            >
                Check Box
        </ToggleButton>
        <ToggleButton
                type="radio"
                id="rbt-crt-6"
                variant="outline-info"
                name="radio"
                value="6"
                checked={"6" === selected}
                onChange={radioHandler}
            >
                Rate
        </ToggleButton>
        <ToggleButton
                type="radio"
                id="rbt-crt-9"
                variant="outline-info"
                name="radio"
                value="4"
                checked={"4" === selected}
                onChange={radioHandler}
            >
                Accept Policy
        </ToggleButton>

*/