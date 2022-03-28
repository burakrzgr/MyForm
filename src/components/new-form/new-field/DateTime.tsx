import { Form, FormControl, Stack } from "react-bootstrap";
import {TringleExclamationSolid} from "../../../FontAwesome/fontAwesome"
import { AnswerTemplate_Date, Display } from "../class/FormTemplate";

export default function DateTime({
    value,
    setValue,
  }: {
    value: AnswerTemplate_Date;
    setValue: Function;
  }) {
    return (
      <>
        <Form.Group className="mt-3">
          <Form.Check
            type="checkbox"
            label="Show Date"
            checked={value.checkDate}
            onChange={(e: any) =>
              setValue({ ...value, checkDate: e.target.checked })
            }
          ></Form.Check>
          <Form.Check
            type="checkbox"
            label="Show Time"
            checked={value.checkTime}
            onChange={(e: any) =>
              setValue({ ...value, checkTime: e.target.checked })
            }
          ></Form.Check>
        </Form.Group>
        <Stack direction="horizontal">
          {value.checkDate ? (
            <div className="p-2">
              <Form.Label>Date</Form.Label>
              <FormControl
                type="date"
                id="myDate"
                style={{ width: "10rem" }}
                className="control-shadow"
              ></FormControl>
            </div>
          ) : (
            <></>
          )}
          {value.checkTime ? (
            <div className="p-2">
              <Form.Label>Time</Form.Label>
              <FormControl
                type="time"
                id="myTime"
                style={{ width: "10rem" }}
                className="control-shadow"
              ></FormControl>
            </div>
          ) : (
            <></>
          )}
          {value.checkDate || value.checkTime ? (<></>) : 
          (
            <div className="alert alert-danger p-2 ps-4 pe-4 mt-4 ">
              <Stack direction="horizontal">
                <div
                  style={{
                    width: "1.7rem",
                    height: "1.7rem",
                    filter:
                      "invert(27%) sepia(49%) saturate(3040%) hue-rotate(333deg) brightness(94%) contrast(90%)",
                  }}
                  className="text-danger me-1"
                >
                  <TringleExclamationSolid />
                </div>
                <div>
                  This component is useless right now! Please select at least
                  one item!
                </div>
              </Stack>
            </div>
          )}
        </Stack>
      </>
    );
}