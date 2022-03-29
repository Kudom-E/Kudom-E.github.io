import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from "./Routes";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      {Routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={ (props => {
              return (
                <route.layout {...props}>
                  <route.component {...props}/>
                </route.layout>
                
              );
            })}
          />
        );
      })}
    </div>
  </Router>
  );
}

export default App;
