import { Stack } from "react-bootstrap";
import { Operation } from "./class/CompletedForm";

export default function History({ history }: { history: Operation[] }) {
    return (
        <>
            <div style={{ display: "table-cell", backgroundColor: "##a2a4aa" }}>
                <div id="history-area" style={{ width: "15rem" }}>
                    <Stack direction="vertical">
                        <div>
                            History
                        </div>
                        <div>
                            {history.map(x => { return(<div>{x.operationType}</div>)})}
                        </div>
                    </Stack>
                </div>
            </div>
        </>);
}