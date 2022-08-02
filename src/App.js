//import logo from './logo.svg';
import './App.css';
import coffee from './coffee.png'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'

function App() {
  return (
    <div className="App">
      <Navbar 
        logoCoffee={coffee}
        home="Home"
        origin="Origin"
        cultivating="Cultivating"
        types="Types"
      />
      <Header />
      
    </div>
  );
}

export default App;

/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/