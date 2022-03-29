import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from "./Routes";
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router >
    <div>
      {Routes.map((route, index) => {
        return (
          <Home/>
        );
      })}
    </div>
  </Router>
  );
}

export default App;
