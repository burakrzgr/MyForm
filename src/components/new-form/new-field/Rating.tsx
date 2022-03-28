import { Button, Form, FormControl, InputGroup, Stack } from "react-bootstrap";
import "../../../css/rating.css";
import { AnswerTemplate_Rate } from "../class/FormTemplate";
import Stars from "../custom-component/Stars";

export default function Rating({
    value,
    setValue,
  }: {
    value: AnswerTemplate_Rate;
    setValue: Function;
  }) {
    const setRowEvent = (val: number) => {
        console.log(val);
        console.log(value);
        if (val > 25) {
            setValue({...value,stars:20});
        }
        else if (val < 1) {
            setValue({...value,stars:5});
        }
        else {
            setValue({...value,stars:val});
        }

    }

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <div ><Form.Label>Area Height</Form.Label></div>
                <div ><InputGroup style={{ width: '9rem',backgroundColor:"white"}} className="control-shadow">
                    <Button variant="outline-danger" style={{ width: '2.5rem' }} onClick={() => setRowEvent(value.stars ? value.stars - 1 : 4)}>-</Button>
                    <FormControl
                        type="Number"
                        placeholder="Number of Column"
                        aria-label="Inputgroupnoc"
                        className="text-center"
                        value={value.stars??5}
                        onChange={(vl: any) => setRowEvent(vl.target.value)}
                    />
                    <Button variant="outline-success" style={{ width: '2.5rem' }} onClick={() => setRowEvent(value.stars ? value.stars + 1 : 6)}>+</Button>
                </InputGroup>
                </div>
            </Stack>
                <Stars count={value.stars??5}></Stars>
        </>
    );
}

