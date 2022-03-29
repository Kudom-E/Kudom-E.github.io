import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Routing } from "./Routes";
import './App.css';

function App() {
  return (
    <Router >
      <Routes>
        {Routing.map((route, index) => {
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
      </Routes>
    </Router>
  );
}

export default App;
