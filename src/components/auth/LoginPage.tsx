import { Button, Container, Form } from "react-bootstrap";
import { SetToken } from "../../database/Token";
import "../../css/login.css";
import { useState } from "react";
import { Login } from "../../axios/login-operation";

export default function LoginPage() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const login = () => {
        const result = Login({UserName :username,Password:password, UserId:0,Token:""})
        result.then(x => {x.data.IsSuccess?SetToken(x.data.Data.token):setError(x.data.Data.Message)})
    }
    return (
        <Container >
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-title">
                        LOGIN
                    </div>
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            {error?<div className="text-danger">{error}</div>:<></>}
                            <Form>
                                <Form.Group>
                                    <Form.Label className="form-control-label">Username</Form.Label>
                                    <Form.Control type="text" value={username} onChange={(val) => setUsername(val.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="form-control-label">Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(val) => setPassword(val.target.value)} />
                                </Form.Group>
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                    </div>
                                    <div className="col-lg-6 login-btm login-button w-100">
                                        <Button type="submit" variant="outline-primary" className="ps-4 pe-4 login" onClick={login} disabled={!(password.length>2&&username.length>2)}>LOGIN</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </Container>
    );
}