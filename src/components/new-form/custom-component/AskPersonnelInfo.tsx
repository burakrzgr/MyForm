import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function AskPersonnelInfo({selected,selectedChanged }:{selected:string,selectedChanged:Function}) {

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
                value="0"
                checked={"0" === selected}
                onChange={radioHandler}
            >
                Dont ask any information
        </ToggleButton>
            <ToggleButton
                type="radio"
                id="rbt-pi-1"
                variant={'outline-warning'}
                name="radio"
                value="1"
                checked={"1" === selected}
                onChange={radioHandler}
            >
                Only if participant accepts  
        </ToggleButton>
            <ToggleButton
                type="radio"
                id="rbt-pi-2"
                variant={'outline-danger'}
                name="radio"
                value="2"
                checked={"2" === selected}
                onChange={radioHandler}
            >
                Make required field
        </ToggleButton>
    </ButtonGroup>
    );
}