import { UserModal } from "../../auth/UserModal"
import { GUID } from "../../new-form/class/Guid"

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

export type CompletedQuestion = {
    id: number, 
    questionText: string, 
    questionDetail?: string, 
    questionType: string, 
    answer : string
}

export type Operation = {
    id :number,
    formId :number
    operationType : number
    conclutionType : number
    targetId : GUID
    creatorId : GUID
    createDate : Date
    conclutionDate? : Date 
}