import logo from "./logo.svg";
import React from "react";
import { GetToken } from "./database/Token";

import { Button } from "react-bootstrap";

export default function Splash() {
    return(
        <>
            <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit </p>
        <code>src/App.tsx</code>
        <p> and save to reload.</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>

            <hr></hr>
            <div className="p-2">Welcome Back {GetToken()}</div>
            <div className="p-2">
            <Button variant="outline-primary">Primary outline</Button>
            </div>
            <div className="p-2">
            <Button variant="primary">Primary Not</Button>
            </div>
            <div className="p-2">
            <Button variant="outline-system">System outline</Button>
            </div>
            <div className="p-2">
            <Button variant="system">System Not</Button>
            </div>
        </>
    );

}