import { Stack } from "react-bootstrap";
import { Operation } from "./class/CompletedForm";
import HistoryDetail from "./HistoryDetail";

export default function History({ history }: { history: Operation[] }) {
    return (
        <>
            <div style={{ display: "table-cell", backgroundColor: "#a2a4aa" }}>
                <div id="history-area" style={{ width: "15rem" }}>
                    <Stack direction="vertical">
                        <div className="text-center" >
                            <h5 style={{fontWeight:600}}>History</h5>
                        </div>
                        <div>
                            {history.map(x => { return(<HistoryDetail detail={x}></HistoryDetail>)})}
                        </div>
                    </Stack>
                </div>
            </div>
        </>);
}