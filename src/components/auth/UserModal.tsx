export type UserModal ={
    userId : number,
    userName : string,
    password : string,
    role? : Role,
    token : string,
    tokenExpiration : Date
};

export enum Role{
    Developer,
    Admin,
    Creator,
    Examiner,
    Redirector,
    Participant,
    Guest
}
