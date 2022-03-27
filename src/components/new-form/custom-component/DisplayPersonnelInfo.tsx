import { Form, Stack } from "react-bootstrap";
import { enumPersonelInfo } from "../class/FormTemplate";

export default function DisplayPersonnelInfo({selected,selectedChanged }:{selected:enumPersonelInfo,selectedChanged:Function}) {

    return(
        <>
            {
                {
                    "0" : <p className="text-success"><u>You are anonymous!</u> No İnformation will be shared with form creator.</p>,
                    "1" : 
                        <Stack direction="horizontal">
                            <div className="text-warning"><u>You want to inform who you are?</u></div>
                            <div className="ps-3"><Form.Check value="yes" checked={false} onChange={() => {}} ></Form.Check></div>
                            <div className="ps-2">Yes</div>
                        </Stack>,
                    "2" : <p className="text-danger"><u>Your information will be shared with form creator!</u></p>
                }[String(selected)]
            }
        </>
    );
}