import { Button, Container, Form } from "react-bootstrap";
import { SetToken } from "../../database/Token";
import "../../css/login.css";
import { useState } from "react";
import { Login } from "../../axios/login-operation";
import { UserModal } from "./UserModal";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [fadingIn,setFadingIn] = useState(false);
    const displayError = (message:string) => {
        setError(message);
        setFadingIn(true);
        setTimeout(() => {
            setFadingIn(false);
        }, 5000);
    }
    let navigate = useNavigate();
    const setTokenData = (data : UserModal)=>{
        SetToken(data);
        navigate("/");
    }
    const CreateNewAccount =() => {
        navigate("../Register");
    }
    const login = () => {
        const result = Login({userName: username,password :password, userId:0,token:"",tokenExpiration:new Date() })
        result.then(x => {x.data.isSuccess?setTokenData(x.data.data):displayError(x.data.message)}).catch(ex => console.log(ex));
    }
    return (
        <Container >
            <div className="row d-flex justify-content-center">
                <div className="login-box">
                    <div className="col-lg-12 login-title">
                        LOGIN
                    </div>
                        <div className="col-lg-12 login-form">
                            {<div className={"text-danger pb-1 " + (fadingIn?'fadeIn':'fadeOut')} >{error}</div>}
                            <Form>
                                <Form.Group>
                                    <Form.Label className="form-control-label login">Username</Form.Label>
                                    <Form.Control className="login" type="text" value={username} onChange={(val) => setUsername(val.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="form-control-label login">Password</Form.Label>
                                    <Form.Control className="login" type="password" value={password} onChange={(val) => setPassword(val.target.value)} />
                                </Form.Group>
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                    </div>
                                    <div className="col-lg-6 login-btm login-button w-100">
                                        <Button variant="outline-primary login" className="ps-4 pe-4 login" onClick={login} disabled={!(password.length>2&&username.length>2)}>LOGIN</Button>
                                    </div>
                                </div>
                            </Form>

                        </div>
                    <div className="col-lg-12 ">
                                    <div style={{marginTop: "115px", marginBottom: "20px"}} className="border-bottom border-light"/>
                                    <Form.Label>Dont have account <a className="link-info" onClick={CreateNewAccount}>create a new one.</a></Form.Label>
                                </div>
                </div>
            </div>
        </Container>
    );
}