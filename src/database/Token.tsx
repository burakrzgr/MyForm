import { UserModal } from "../components/auth/UserModal";

export const GetToken = () => { return(JSON.parse(localStorage.getItem('user')??"{}") as UserModal)};
export const SetToken = (obj : UserModal) => { localStorage.setItem("user", JSON.stringify(obj));};
