import { UserModal } from "../../auth/UserModal"

export type CompletedForm = {
    id: number,
    formName?: string,
    formDesc?: string,
    submitDate: Date,
    creatorUser: UserModal,
    personalInfoShared: boolean,
    submitterUser: UserModal,
    completedQuestions?: CompletedQuestion[]
}

export type CompletedQuestion =  {
    id: number, 
    questionText: string, 
    questionDetail?: string, 
    questionType: string, 
    answer : string
}