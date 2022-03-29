import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from "./Routes";
import './App.css';
import Splash from './Pages/Splash/Splash';

function App() {
  return (
    <Router >
    <div>
      {Routes.map((route, index) => {
        return (
          <Splash/>
        );
      })}
    </div>
  </Router>
  );
}

export default App;
