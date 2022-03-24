import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import UploadFilePng from "../../../resources/UploadFile.png";
import FileFormatPicker from "../custom-component/FileFormatPicker";


export default function UploadFile() {
    const [tempUrl, setTempUrl] = useState<string>("");
    const [uploaded, setUploaded] = useState<boolean>(false);
    const [files, setFiles] = useState<string[]>([]);
    const [multi, setMulti] = useState<boolean>(false);
    const [selectedFormat, setSelectedFormat] = useState<{ list: string[] }>({ list: ["JPG","JPEG","BMP","PNG","PDF","RAR"] });

    const handleChange = (f: any) => {
        setUploaded(true);
        if (multi) {
            let list: string[] = [];
            for (let i = 0; f.length > i; i++) {
                list.push(f[i].name);
            }
            setFiles(list);
            console.log(list);
        }
        else {
            setTempUrl(URL.createObjectURL(f));
        }
    };
    const removeFiles = () => {
        setUploaded(false);
        //setFile({changed:false,img:null});
        setTempUrl("");
    };
    const removeFile = (file: string) => {
        setUploaded(false);
        //setFile({changed:false,img:null});
        setTempUrl("");
    };

    const addFormatToList = (strList: string[]) => {
        let newList = selectedFormat.list;
        strList.forEach(str => {
            if (newList.includes(str))
                newList = newList.filter(x => x !== str);
            else
                newList.push(str);
        });
        setSelectedFormat({ list: newList });
    }

    return (
        <>
            <Form.Group className="mb-3" controlId="chkIsMultiOk">
                <Form.Label>Allowed types of the file</Form.Label>
                <FileFormatPicker selectedFormat={selectedFormat.list} selectedFormatAdded={(val: string[]) => addFormatToList(val)} removeFormat={() => { setSelectedFormat({ list: [] }); }}></FileFormatPicker>
            </Form.Group>
            <Form.Group className="mb-3" controlId="chkIsMultiOk">
                <Form.Check
                    type="checkbox"
                    label="Allow Multi Upload"
                    checked={multi}
                    onChange={(e: any) => setMulti(e.target.checked)}
                ></Form.Check>
            </Form.Group>
            <div className="w-100 expand-child">
                <FileUploader
                    handleChange={handleChange}
                    name="file"
                    hoverTitle="Drop Here"
                    types={selectedFormat.list.includes("Any Format") ? ["*"] : selectedFormat.list}
                    multiple={multi}
                >
                    <ChildComponent tempUrl={tempUrl} removeFile={removeFile} uploaded={uploaded} multi={multi} files={files} formats={selectedFormat.list.includes("Any Format") ? ["All file formats accepted."] : selectedFormat.list} />
                </FileUploader>
            </div>
            {tempUrl ? (
                <div className="d-grid mt-2">
                    <Button variant="danger" size="sm" onClick={() => removeFiles()}>
                        Remove All Upload
                    </Button>
                </div>) : <></>}
        </>
    );
}


const ChildComponent = ({ tempUrl, removeFile, uploaded, multi, files, formats }: { tempUrl: string, removeFile: Function, uploaded: boolean, multi: boolean, files: string[], formats: string[] }) => (
    <>
        {uploaded ? (
            <>
                <div
                    style={{ height: "16rem" }}
                    className="border border-secondary dashed rounded p-1 w-100 text-center"
                >
                    {multi ? <>{files.map((x, key) => { return <div key={key}>"{x}" Yüklendi!</div> })}</> :
                        <img
                            src={tempUrl}
                            alt=""
                            style={{
                                height: "100%",
                                width: "20rem",
                                objectFit: "contain",
                            }}
                        />}

                </div>
            </>
        ) : (
            <div
                style={{ height: "16rem" }}
                className="border-secondary border-dashed rounded p-1 w-100 "
            >
                <Stack className="align-items-center justify-content-center h-100">
                    <div className="text-center ">Drag the acccepted file Formats here.</div>
                    <div className="text-center pt-4 pb-4">
                        <img
                            src={UploadFilePng}
                            alt="Add Icon"
                            style={{ width: "4rem" }}
                        ></img>
                    </div>
                    <div className="text-center ">Accepted Formats</div>
                    <div className="text-center ">{formats.toString()}</div>

                </Stack>
            </div>
        )}
    </>
);

