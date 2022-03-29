import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from "./Routes";
import './App.css';

function App() {
  return (
    <Router >
    <div>
      {Routes.map((route, index) => {
        return (
          1
        );
      })}
    </div>
  </Router>
  );
}

export default App;
