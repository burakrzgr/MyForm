import logo from "./logo.svg";
import React from "react";
import { GetToken } from "./database/Token";
import { Button } from "react-bootstrap";
import { ReactIcon } from "./FontAwesome";

export default function Splash() {
    return(
        <>
            <img src={logo} className="App-logo" alt="logo" />
        <p>
            This project developed with </p>
        <code>React TypeScript & Bootstrapt</code>
        <p> by Burak Rüzgar.</p>
            <p>
                <ReactIcon mystyle={{paddingRight:"1rem"}}></ReactIcon>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </p>
            <a
                className="App-link"
                href="https://github.com/burakrzgr"
                target="_blank"
                rel="noopener noreferrer"
            >
                About Me
            </a>
            <hr></hr>
            <div className="p-2">Welcome Back {GetToken()?.userName??""}</div>
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