import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';



function App() {
  return (
  
    <div className="App">
      <Router>
         <NavBar/>
         </Router>
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
     
      </header>
    </div>
  );
}

export default App;
