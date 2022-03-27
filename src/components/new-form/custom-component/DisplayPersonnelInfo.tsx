import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { enumPersonelInfo } from "../class/FormTemplate";

export default function DisplayPersonnelInfo({selected,selectedChanged }:{selected:enumPersonelInfo,selectedChanged:Function}) {

    return(
        <>
            {
                {
                    "0" : <>Dont ask any information</>,
                    "1" : <>Only if participant accepts.</>,
                    "32" : <>Make required field</>
                }[String(selected)]
            }
        </>
    );
}