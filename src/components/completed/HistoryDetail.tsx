import { Button } from "react-bootstrap";
import { Operation } from "./class/CompletedForm";

export default function HistoryDetail({ detail }: { detail: Operation}) {
    return (
        <div className="m-2">
            <Button variant="outline-secondary" className="w-100">
                {detail.operationType}
            </Button>
        </div>
    );
}