import { Route, HashRouter} from 'react-router-dom';
import { Routes } from "./Routes";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        {Routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={ (props => {
                return (
                  <route.layout {...props} splash={route.splash}>
                    <route.component {...props}/>
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </HashRouter>
  );
}

export default App;
