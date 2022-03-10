import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function SelectCriteriaType({selected,selectedChanged }:{selected:string,selectedChanged:Function}) {

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        selectedChanged(event.target.value);
      };


    let listofType: { val: string, name: string }[] = [
        { "val": "tx_b", "name": "Text Box" },
        { "val": "tx_a", "name": "Text Area" },
        { "val": "sel_", "name": "Radio Button" },
        { "val": "cm_b", "name": "Combo Box" },
        { "val": "ch_b", "name": "Check Box" },
        { "val": "date", "name": "Date / Time" },
        { "val": "rate", "name": "Rate" },
        { "val": "ap_c", "name": "Accept Policy" }
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
