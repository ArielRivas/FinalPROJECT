import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ControlRoom from "./ControlRoom/ControlRoom";
import TodoContainer from "./ControlRoom/TodoContainer/TodoContainer";
import Navigation from "./ControlRoom/Navigation/Navigation";
import Launch from "./ControlRoom/Launch/RocketVideos/RocketVideos";
import Status from "./ControlRoom/Status/Status";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/controlroom' component={ControlRoom} />
          <Route path='/todoContainer' component={TodoContainer} />
          <Route path='/navigation' component={Navigation} />
          <Route path='/launch' component={Launch} />
          <Route path='/status' component={Status} />
        </Switch>
      </div>
        <App date={Date.now()} />
    </Router>
  );
};

export default App;
