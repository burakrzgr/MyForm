import logo from "./logo.svg";
import { GetToken } from "./database/Token";
import { Button } from "react-bootstrap";
import { GithubIcon, ReactIcon } from "./FontAwesome";

export default function Splash() {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This project developed with </p>
            <code>React TypeScript & Bootstrapt</code>
            <p> by Burak Rüzgar.</p>
            <div>
                <Button
                    variant="dark"
                    className="ps-4 pe-4 border-info mb-2"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer" >
                    <ReactIcon mystyle={{ paddingRight: "1rem" }}></ReactIcon>
                    <a className="App-link">
                        Learn React
                    </a>
                </Button>
            </div>
            <div>
                <Button
                    variant="dark"
                    className="ps-4 pe-4 border-info mb-2"
                    href="https://github.com/burakrzgr"
                    target="_blank"
                    rel="noopener noreferrer" >
                    <GithubIcon mystyle={{ paddingRight: "1rem" }}></GithubIcon>
                    <a className="App-link">
                        About Me
                    </a>
                </Button>
            </div>
            <hr></hr>
            <div className="p-2">Welcome Back {GetToken()?.userName ?? ""}</div>
            <div className="p-2">
                <Button variant="outline-primary">Primary outline</Button>
            </div>
            <div className="p-2">
                <Button variant="primary">Primary Main</Button>
            </div>
            <div className="p-2">
                <Button variant="outline-system">System outline</Button>
            </div>
            <div className="p-2">
                <Button variant="system">System Main</Button>
            </div>
        </>
    );

}