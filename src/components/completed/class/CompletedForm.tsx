import { UserModal } from "../../auth/UserModal"

export type CompletedForm = {
    id: number,
    formName?: string,
    formDesc?: string,
    submitDate: Date,
    creatorUser: UserModal,
    personalInfoShared: boolean,
    submitterUser: UserModal,
    completedQuestions?: string
}