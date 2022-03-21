import { ButtonGroup, ToggleButton, Row } from "react-bootstrap";
import { fileformat } from "../../../data/file-format";

export default function FileFormatPicker({ selectedFormat, selectedFormatAdded }: { selectedFormat: string[], selectedFormatAdded: Function }) {
    return (
        <div className="">
            <ButtonGroup className=" bg-white control-shadow p-0 m-1" size="sm">
                {fileformat.IMAGE.map((i) => (
                    <ToggleButton
                        key={i.name}
                        type="checkbox"
                        id={"chk-crt-" + i.name}
                        variant="outline-success"
                        name="chk"
                        value={i.name}
                        checked={selectedFormat.includes(i.name)}
                        onChange={() => selectedFormatAdded(i.name)}
                    >
                        {i.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <ButtonGroup className=" bg-white control-shadow p-0 m-1" size="sm">
                {fileformat.DOCUMENT.map((i) => (
                    <ToggleButton
                        key={i.name}
                        type="checkbox"
                        id={"chk-crt-" + i.name}
                        variant="outline-danger"
                        name="chk"
                        value={i.name}
                        checked={selectedFormat.includes(i.name)}
                        onChange={() => selectedFormatAdded(i.name)}
                    >
                        {i.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <ButtonGroup className=" bg-white control-shadow p-0 m-1" size="sm">
                {fileformat.MEDIA.map((i) => (
                    <ToggleButton
                        key={i.name}
                        type="checkbox"
                        id={"chk-crt-" + i.name}
                        variant="outline-warning"
                        name="chk"
                        value={i.name}
                        checked={selectedFormat.includes(i.name)}
                        onChange={() => selectedFormatAdded(i.name)}
                    >
                        {i.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <ButtonGroup className=" bg-white control-shadow p-0 m-1" size="sm">
                {fileformat.COMPRESSED.map((i) => (
                    <ToggleButton
                        key={i.name}
                        type="checkbox"
                        id={"chk-crt-" + i.name}
                        variant="outline-dark"
                        name="chk"
                        value={i.name}
                        checked={selectedFormat.includes(i.name)}
                        onChange={() => selectedFormatAdded(i.name)}
                    >
                        {i.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <ButtonGroup className=" bg-white control-shadow p-0 m-1" size="sm">
                {fileformat.CODE.map((i) => (
                    <ToggleButton
                        key={i.name}
                        type="checkbox"
                        id={"chk-crt-" + i.name}
                        variant="outline-primary"
                        name="chk"
                        value={i.name}
                        checked={selectedFormat.includes(i.name)}
                        onChange={() => selectedFormatAdded(i.name)}
                    >
                        {i.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <ButtonGroup className=" bg-white control-shadow p-0 m-1 ms-5" size="sm" >
                <ToggleButton
                    key="any-type"
                    type="checkbox"
                    id={"chk-crt-anytype"}
                    variant="outline-info"
                    name="chk"
                    value="any-type"
                    checked={selectedFormat.includes("Any Format")}
                    onChange={() => selectedFormatAdded("Any Format")}
                >
                    Any Format
                </ToggleButton>
            </ButtonGroup>
        </div>);
}