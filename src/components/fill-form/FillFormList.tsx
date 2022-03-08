import {useParams} from "react-router-dom";

export default function FillFormList() {
    const {type} = useParams<{type?: string}>();
    return (
        <p>Fill Form From List : {type}</p>
    );
}