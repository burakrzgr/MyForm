import { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import MyFileUploader from "../../misc/MyFileUploader";
import { defaultValues } from "../class/defaultValues";
import { AnswerTemplate_Upload } from "../class/FormTemplate";
import FileFormatPicker from "../custom-component/FileFormatPicker";


export default function UploadFile({
    value,
    setValue,
  }: {
    value: AnswerTemplate_Upload;
    setValue: Function;
  }) {
    const [files, setFiles] = useState<string[]>([]);

    const removeFiles = () => {
        setFiles([]);
    };

    const addFormatToList = (strList: string[]) => {
        let newList = value.fileTypes??([...defaultValues.emptyUploadFileTypes]);
        strList.forEach(str => {
            if (newList.includes(str))
                newList = newList.filter(x => x !== str);
            else
                newList.push(str);
        });
        setValue({...value,fileTypes:newList});
    }
    useEffect(() => {
      if(value.fileTypes == null){
          setValue({...value,fileTypes: [...defaultValues.emptyUploadFileTypes]})
      }
    })

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Allowed types of the file</Form.Label>
                <FileFormatPicker selectedFormat={value.fileTypes??["Error"]} selectedFormatAdded={(val: string[]) => addFormatToList(val)} removeFormat={() => setValue({...value,fileTypes:[]}) }></FileFormatPicker>
            </Form.Group>
            <Form.Group className="mb-3" controlId="chkIsMultiOk">
                <Form.Check
                    type="checkbox"
                    label="Allow Multi Upload"
                    checked={value.multi}
                    onChange={(e: any) => setValue({...value,multi: e.target.checked})}
                ></Form.Check>
            </Form.Group>
            <div className="w-100 expand-child">
                <MyFileUploader fileTypes={value.fileTypes??defaultValues.emptyUploadFileTypes} multi={value.multi} files={files} setFiles={(list :string[]) => setFiles(list)} ></MyFileUploader>
            </div>
            {files.length > 0 ? (
                <div className="d-grid mt-2">
                    <Button variant="danger" size="sm" onClick={() => removeFiles()}>
                        Remove All Upload
                    </Button>
                </div>) : <></>}
        </>
    );
}

