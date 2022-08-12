//import logo from './logo.svg';
import './App.css';
import coffee from './coffee.png'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Section from './components/Section.js'
//import dataOrigin from './dataOrigin'

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
      <Section 
        title="World production"
        description="At least 20 to 25 million families around the world make a living from growing coffee. With an assumed average family size of five people, more than 100 million people are dependent on coffee growing. A total of 10.3 million tons of green coffee were harvested worldwide in 2018."
        coverImg='./pexels-min-an-770318.jpg'
      />
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