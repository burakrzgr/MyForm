export type GUID = string & { isGuid: true};

export function getGuid(guid: string) : GUID {
    return  guid as GUID; // maybe add validation that the parameter is an actual guid ?
}