import './App.scss';
import ControlRoom from './ControlRoom/ControlRoom';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/controlroom" component={ControlRoom} />
        </Switch>
        <Home></Home>
        <Login></Login>
      </div>
    </Router>
  );
}

export default App;
