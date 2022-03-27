import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { enumPersonelInfo } from "../class/FormTemplate";

export default function AskPersonalInfo({selected,selectedChanged }:{selected:enumPersonelInfo,selectedChanged:Function}) {

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        selectedChanged(event.target.value);
      };

    return(
        <ButtonGroup>
            <ToggleButton
                type="radio"
                id="rbt-pi-0"
                variant={'outline-success'}
                name="radio"
                value={enumPersonelInfo.dontAsk}
                checked={enumPersonelInfo.dontAsk === Number(selected)}
                onChange={radioHandler}
            >
                Dont ask any information
        </ToggleButton>
            <ToggleButton
                type="radio"
                id="rbt-pi-1"
                variant={'outline-warning'}
                name="radio"
                value={enumPersonelInfo.ask}
                checked={enumPersonelInfo.ask === Number(selected)}
                onChange={radioHandler}
            >
                Only if participant accepts  
        </ToggleButton>
            <ToggleButton
                type="radio"
                id="rbt-pi-2"
                variant={'outline-danger'}
                name="radio"
                value={enumPersonelInfo.required}
                checked={enumPersonelInfo.required === Number(selected)}
                onChange={radioHandler}
            >
                Make required field
        </ToggleButton>
    </ButtonGroup>
    );
}