import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/HeaderNavbar";
import ConfigureRouter from "./RouterConfig";

function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <header className="App-header">
          <ConfigureRouter></ConfigureRouter>
      </header>
    </div>
  );
}

export default App;
