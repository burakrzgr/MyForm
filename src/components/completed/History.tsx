import { Button, Stack } from "react-bootstrap";
import { Operation } from "./class/CompletedForm";
import HistoryDetail from "./HistoryDetail";

export default function History({ history,allowed }: { history: Operation[],allowed:boolean }) {
    return (
        <>
            <div style={{ display: "table-cell", backgroundColor: "#a2a4aa" }}>
                {allowed?
                <div id="history-area" style={{ width: "15rem" }}>
                    <Stack direction="vertical">
                        <div className="text-center" >
                            <h5 style={{fontWeight:600}}>History</h5>
                        </div>
                        <div>
                            {history.map(x => { return(<HistoryDetail detail={x}></HistoryDetail>)})}
                        </div>
                    </Stack>
                </div>:
                <div id="history-area" style={{ width: "15rem" }}>
                    <div className="text-center" >
                            <h5 style={{fontWeight:600}}>
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                                <div>You are</div>
                                <div>not</div>
                                <div>allowed</div>
                                <div>to see</div>
                                <div>history</div>
                                <div>&nbsp;</div>
                            </h5>
                            <Button variant="danger">Close History</Button>
                    </div>
                </div>}
            </div>
        </>);
}