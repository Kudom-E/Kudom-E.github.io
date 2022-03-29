import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from "./Routes";
import './App.css';
import Splash from './Pages/Splash/Splash';
import Layout from './Layout/Layout';

function App() {
  return (
    <Router >
    <div>
      <Layout/>
    </div>
  </Router>
  );
}

export default App;
