import logo from "./logo.svg";
import React from "react";

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
            <div>
            <Button variant="outline-primary">Primary outline</Button>
            </div>
            <div>
            <Button variant="primary">Primary Not</Button>
            </div>
            <div>
            <Button variant="outline-system">System outline</Button>
            </div>
            <div>
            <Button variant="system">System Not</Button>
            </div>
        </>
    );

}