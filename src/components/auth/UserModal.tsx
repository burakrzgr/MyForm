export type UserModal ={
    userId : number,
    userName : string,
    password : string,
    roles? : Role[],
    token : string,
    tokenExpiration : Date
};

export enum Role{
    Anonymous,
    Developer,
    Admin,
    Creator,
    Broadcaster,
    Examiner,
    Redirector,
    Participant
}
