import { CompletedQuestion } from "./class/CompletedForm";

export default function ViewQuestion({question}: {question:CompletedQuestion}) {
    return(
        <div className="pt-3 pe-2">
            <h5>{question.questionText}</h5>
            <p>{question.answer}</p>
        </div>
    );
}