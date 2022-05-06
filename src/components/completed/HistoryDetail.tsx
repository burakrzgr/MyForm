import { Button } from "react-bootstrap";
import { Operation } from "./class/CompletedForm";

export default function HistoryDetail({ detail }: { detail: Operation}) {
    return (
        <div className="m-2">
            <div className="w-100 border border-dark p-1 rounded">
                {detail.operationType}
            </div>
        </div>
    );
}