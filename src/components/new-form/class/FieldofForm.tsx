
export type FieldoForm ={
    name : string,
    type : string,
    value? : string,
    options? : string[],
    count? : number,
    checkText? : string,
    variant? : string,
    displays? : Display
};

export type Display ={
    checked:boolean, 
    multi:boolean, 
    date:boolean,
    time:boolean 
};