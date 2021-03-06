import { useState } from "react";
import { Form, FormControl, Stack } from "react-bootstrap";
import { DangerIcon} from "../../../FontAwesome"
import { AnswerTemplate_Date } from "../class/FormTemplate";

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
            checked={value.checkDate??false}
            onChange={(e: any) => setValue({ ...value, checkDate: e.target.checked })
            }
          ></Form.Check>
          <Form.Check
            type="checkbox"
            label="Show Time"
            checked={value.checkTime??false}
            onChange={(e: any) => setValue({ ...value, checkTime: e.target.checked })
            }
          ></Form.Check>
        </Form.Group>
        <Stack direction="horizontal">
          {value.checkDate ? (
            <div className="p-2">
              <Form.Label>Date</Form.Label>
              <FormControl
                type="date"
                style={{ width: "10rem" }}
                className="control-shadow"
              //  value={date}
               // onChange={(e:any) => setDate(e.target.value)}
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
                style={{ width: "10rem" }}
                className="control-shadow"
            //    value={time}
            //    onChange={(e : any) => setTime(e.target.value)}
              ></FormControl>
            </div>
          ) : (
            <></>
          )}
          {value.checkDate || value.checkTime ? (<></>) : 
          (
            <div className="alert alert-danger p-2 ps-4 pe-4 mt-4 ">
              <Stack direction="horizontal">
                <div>
                  <DangerIcon mystyle={{paddingRight:"0.5rem",height:"1.3rem"}} />
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