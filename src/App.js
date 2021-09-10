import './App.scss';
import Dashboard from './Main/Dashboard';
import Ordini from './Main/Ordini';
import NavbarLaterale from './Sidebar/NavbarLaterale';


import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavbarLaterale />
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/ordini">
          <Ordini />
        </Route>
        <Route exact path="/">
          <Redirect exact from="/" to="/dashboard" />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
