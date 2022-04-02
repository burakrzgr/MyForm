import { Alert, Form, FormControl, Stack } from "react-bootstrap";
import "../../../css/question-box.css"
import MyFileUploader from "../../misc/MyFileUploader";
import { QuestionTemplate } from "../../new-form/class/FormTemplate";
import Stars from "../../new-form/custom-component/Stars";
import { FilledQuestion } from "../class/FilledForm";
import FillFieldHeader from "./FillFieldHeader";

const questionClass = "border rounded p-3 pt-2 mt-4 mb-4 question";

export function FillTextField({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item.template} />
                <Form.Control type="text" placeholder="Form Text" 
                    value={item.answeredValue.text??item.template.answerArea.defaultText??""} 
                    onChange={(tx) => valueChangedEvent({...item,answeredValue :{text :tx.target.value }})} />
            </Form.Group>
        </>);
}

export function FillTextArea({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function  }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item.template} />
                <Form.Control type="text"
                    placeholder="Form Text"
                    rows={item.template.answerArea.textHeight}
                    as="textarea"
                    style={{ resize: "none" }} 
                    value={item.answeredValue.text??item.template.answerArea.defaultText??""} 
                    onChange={(tx) => valueChangedEvent({...item,answeredValue :{text :tx.target.value }})}
                    />
            </Form.Group>
        </>);
}

export function FillFieldSelect({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function  }) {
    const switchItem = (list:string[],item:string) => {
        if(!list.includes(item)){
            list.push(item);
        }else{
            list = list.filter(x => x !== item);//deleting
        }
        return list;
    }
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item.template} />
                {item.template.answerArea.options ? item.template.answerArea.options.map((i: any, key: any) => (
                    item.template.answerArea.multi ?
                        <Form.Check
                            key={key}
                            type= "checkbox"
                            label={i}
                            value={i}
                            checked={item.answeredValue.selected ?item.answeredValue.selected.includes(i):false}
                            onChange={(e: any) => valueChangedEvent({...item,answeredValue :{ selected : switchItem(item.answeredValue.selected??[], e.target.value)}})}
                        ></Form.Check> :
                        <Form.Check
                            key={key}
                            type= "radio"
                            label={i}
                            value={i}
                            checked={item.answeredValue.selected ?item.answeredValue.selected.includes(i):false}
                            onChange={(e: any) => valueChangedEvent({...item,answeredValue :{ selected : e.target.value}})}
                        ></Form.Check> 
                )) : <></>}
            </Form.Group>
        </>);
}
export function FillFieldCombo({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function  }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item.template} />
                <Form.Select aria-label="Select option" className="control-shadow" 
                    value={item.answeredValue.picked??""} 
                    onChange={(e:any) => valueChangedEvent({...item,answeredValue :{ picked : e.target.value}})} >
                    <option>[Please select one of the options...]</option>
                    {item.template.answerArea.options ? item.template.answerArea.options.map((i: any) => (
                        <option value={i} key={i}>{i}</option>
                    )) : <></>}
                </Form.Select>
            </Form.Group>
        </>);
}
export function FillFieldCheck({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function  }) {
    return (
        <>
            <Form.Group className={questionClass}>
                <FillFieldHeader item={item.template} />
                <Form.Group >
                    <Form.Check
                        type="checkbox"
                        label={item.template.answerArea.checkText}
                        checked={item.answeredValue.checked??item.template.answerArea.defaultChecked}
                        onChange={(e: any) =>  valueChangedEvent({...item,answeredValue :{ checked : e.target.checked}})}
                    ></Form.Check>
                </Form.Group>
            </Form.Group>
        </>);
}

export function FillFieldDateTime({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function  }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <Stack direction="horizontal">
                    {item.template.answerArea && (item.template.answerArea.checkDate || item.template.answerArea.checkTime) ?
                        <>
                            {item.template.answerArea.checkDate ?
                                <div className="p-2">
                                    <Form.Label>Date</Form.Label>
                                    <FormControl type="date" style={{ width: "10rem" }} className="control-shadow" 
                                        value={item.answeredValue.date??""} 
                                        onChange={(e: any) => valueChangedEvent({...item,answeredValue :{ date : e.target.value, time : item.answeredValue.time}})} 
                                    ></FormControl>
                                </div> : <></>}
                            {item.template.answerArea.checkTime ?
                                <div className="p-2">
                                    <Form.Label>Time</Form.Label>
                                    <FormControl type="time" style={{ width: "10rem" }} className="control-shadow"
                                        value={item.answeredValue.time??""} 
                                        onChange={(e: any) =>  valueChangedEvent({...item,answeredValue :{ time : e.target.value, date : item.answeredValue.date}})} 
                                    ></FormControl>
                                </div> : <></>}
                        </> : <span className="alert alert-danger p-2 ps-4 pe-4 mt-4">Date Time Error!</span>}
                </Stack>
            </Form.Group>
        </>);
}

export function FillFieldRate({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function  }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item.template} />
                <Stars count={item.template.answerArea.stars ? item.template.answerArea.stars : 5}></Stars>
            </Form.Group>
        </>);
}

export function FillFieldAcceptPolicy({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item.template} />
                <Form.Control type="text"
                    placeholder="Detail of the Policy is in Here!"
                    defaultValue={item.template.answerArea.description}
                    rows={12}
                    as="textarea"
                    style={{ resize: "none" }}
                    readOnly />
                <Form.Check
                    type="checkbox"
                    label={item.template.answerArea.checkText}
                    checked={item.answeredValue.checked??item.template.answerArea.defaultChecked}
                    onChange={(e: any) =>  valueChangedEvent({...item,answeredValue :{ checked : e.target.checked}})}
                ></Form.Check>
            </Form.Group>
        </>);
}
export function FillFieldUpload({ item, valueChangedEvent }: { item: FilledQuestion, valueChangedEvent: Function  }) {
    return (
        <>
            <Form.Group className={questionClass} >
                <FillFieldHeader item={item.template} />
                <div className="w-100 expand-child bg-light text-dark p-1 rounded">
                    <MyFileUploader
                        fileTypes={item.template.answerArea.fileTypes}
                        multi={item.template.answerArea.multi}
                        files={[]}
                        setFiles={() => { }}
                    ></MyFileUploader>
                </div>
            </Form.Group>
        </>);
}
export function FillFieldInfo({ item }: { item: QuestionTemplate }) {
    return (
        <>
            <Form.Group className="p-0 m-0 mt-5 mb-5"  >
                <Alert variant={item.answerArea.variant ?? "info"} onClose={() => { }} dismissible> {item.questionText}</Alert>
            </Form.Group>
        </>);
}