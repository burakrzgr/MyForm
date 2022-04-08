import axios from "axios";
import { UserModal } from "../components/auth/UserModal";
import { baseApi } from "../config";

export const Login = (form : UserModal) => {return axios.post(`${baseApi.link}/Auth/Login`,form);};