import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function DisplayPersonnelInfo({selected,selectedChanged }:{selected:string,selectedChanged:Function}) {

    return(
        <>
            {
                {
                    "anonymous" : <>Dont ask any information</>,
                    "asks permission" : <>Only if participant accepts.</>,
                    "required" : <>Make required field</>
                }[selected]
            }
        </>
    );
}