import axios from "axios";
import { UserModal } from "../components/auth/UserModal";

export const Login = (form : UserModal) => {return axios.post("https://localhost:7213/Submit",form);};