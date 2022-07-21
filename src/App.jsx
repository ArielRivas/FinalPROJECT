import './App.scss';
import ControlRoom from './ControlRoom/ControlRoom';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import Carousel from './Carousel/Carousel';
import Login from './Login/Login';

function App() {

  const slides = [
    { img: '../assets/home/homerMarsSlider1.png' , title: "Lorem ipsum is simply text of the history of the printing", subtitle: "YOUR MISSION", paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },

    { img: '../assets/home/homerMarsSlider2.png' , title: "Lorem ipsum is simply text of the history of the printing", subtitle: "OUR MISSION", paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },
    
    { img: '../assets/home/homePatch.png' , title: "Lorem ipsum is simply text of the history of the printing", subtitle: "THE LAST MISSION", paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },
    
  ];

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
