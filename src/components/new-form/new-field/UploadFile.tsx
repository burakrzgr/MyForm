import { upload } from "@testing-library/user-event/dist/upload";
import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import { fileformat } from "../../../data/file-format";
import UploadFilePng from "../../../resources/UploadFile.png";


export default function UploadFile() {
    const [tempUrl, setTempUrl] = useState<string>("");
    const [uploaded, setUploaded] = useState<boolean>(false);
    const [files, setFiles] = useState<string[]>([]);
    const [multi, setMulti] = useState<boolean>(false);

    const handleChange = (f: any) => {
        setUploaded(true);
        if(multi){
            let list : string[] = [];
            for(let i = 0; f.length>i;i++){
                list.push(f[i].name);
            }
            setFiles(list);
            console.log(list);
        }
        else
        {
            setTempUrl(URL.createObjectURL(f));
        }
    };
    const removeFiles = () => {
        setUploaded(false);
        //setFile({changed:false,img:null});
        setTempUrl("");
    }; 
    const removeFile = (file : string) => {
        setUploaded(false);
        //setFile({changed:false,img:null});
        setTempUrl("");
    };

    let selectedFileFormat = ["PNG", "BMP", "PDF"];

    return (
        <>
            <Form.Group className="mb-3" controlId="chkIsMultiOk">
                <Form.Check
                    type="checkbox"
                    label="Allow Multi Upload"
                    checked={multi}
                    onChange={(e: any) => setMulti(e.target.checked)}
                ></Form.Check>
            </Form.Group>
            <FileUploader
                className="w-100"
                handleChange={handleChange}
                name="file"
               // children={}
                hoverTitle="Drop Here"
                types={selectedFileFormat}
                multiple={multi}
            >
                <ChildComponent tempUrl={tempUrl} removeFile={removeFile} uploaded={uploaded} multi={multi} files={files} />
            </FileUploader>
            {tempUrl ? (
                <div className="d-grid mt-2">
                    <Button variant="danger" size="sm" onClick={() => removeFiles()}>
                        Remove All Upload
                    </Button>
                </div>) : <></>}
        </>
    );
}


const ChildComponent = ({ tempUrl, removeFile,uploaded,multi,files }: { tempUrl: string, removeFile: Function,uploaded :boolean,multi:boolean,files:string[] }) => (
    <>
        {uploaded ? (
            <>
                <div
                    style={{ height: "28rem"}}
                    className="border border-secondary dashed rounded p-1 w-100 text-center"
                >
                    {multi ? <>{files.map((x,key) => {return <div key={key}>"{x}" Yüklendi!</div>})}</>:
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
                style={{ height: "28rem"}}
                className="border border-secondary dashed rounded p-1"
            >
                <Stack className="align-items-center justify-content-center h-100">
                    <div className="text-center ">Drag the image of<br />the pokemon here.</div>
                    <div className="text-center pt-4 pb-4">
                        <img
                            src={UploadFilePng}
                            alt="Add Icon"
                            style={{ width: "4rem" }}
                        ></img>
                    </div>
                    <div className="text-center ">Accepted Formats</div>
                    <div className="text-center ">JPG, PNG, BMP</div>

                </Stack>
            </div>
        )}
    </>
);

