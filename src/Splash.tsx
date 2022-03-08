import logo from "./logo.svg";
import React from "react";

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
        </>
    );

}