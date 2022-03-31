import { FormTemplate } from "../../new-form/class/FormTemplate";
import { GUID } from "../../new-form/class/Guid";


export type FilledForm = {
    id : number,
    creatorId : GUID,
    template : FormTemplate,
}

