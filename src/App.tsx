import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/HeaderNavbar";
import ConfigureRouter from "./RouterConfig";

function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <header className="App-content">
        <div className='night-club'>
          <ConfigureRouter></ConfigureRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
