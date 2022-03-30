import { Stack } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import UploadFilePng from "../../resources/UploadFile.png";

export default function MyFileUploader({ fileTypes, multi, files, setFiles }: { fileTypes: string[], multi: boolean, files: string[], setFiles: Function }) {

    return (<>
        <FileUploader
            handleChange={setFiles}
            name="file"
            hoverTitle="Drop Here"
            types={fileTypes.includes("Any") ? undefined : fileTypes}
            multiple={multi}
        >
            <ChildComponent multi={multi} files={files} formats={fileTypes ? (fileTypes.includes("Any") ? ["All file formats accepted."] : fileTypes) : ["Error"]} />
        </FileUploader>
    </>);
}

const ChildComponent = ({ multi, files, formats }: { multi: boolean, files: string[], formats: string[] }) => (
    <>
        {files.length> 0 ? (
            <>
                <div
                    style={{ height: "16rem" }}
                    className="border border-secondary dashed rounded p-1 w-100 text-center"
                >
                    {multi ? <>{files.map((x, key) => { return <div key={key}>"{x}" Yüklendi!</div> })}</> :
                        <img
                            src={files[0]}
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