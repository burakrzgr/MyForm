import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function DisplayPersonnelInfo({selected,selectedChanged }:{selected:string,selectedChanged:Function}) {

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
                checked={"anonymous" === selected}
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
                checked={"ask" === selected}
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
                checked={"required" === selected}
                onChange={radioHandler}
            >
                Make required field
        </ToggleButton>
    </ButtonGroup>
    );
}