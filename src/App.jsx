import "./App.scss";
import NavBar from "./NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import ControlRoom from "./ControlRoom/ControlRoom";
import TodoContainer from './ControlRoom/TodoContainer/TodoContainer';
import Navigation from "./ControlRoom/Navigation/Navigation";
import Status from "./ControlRoom/Status/Status";
import Launch from "./ControlRoom/Launch/Launch";
import RocketVideos from "./ControlRoom/Launch/RocketVideos/RocketVideos";

const App = () => {
  return (

    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/controlroom/*' element={<ControlRoom />} />
        <Route path='/todocontainer' element={<TodoContainer />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/status' element={<Status />} />
        <Route path='/launch' element={<Launch />} />
        <Route path='/rocketvideos' element={<RocketVideos />} />
        <Route path="*" element={<div>Ruta no encontrada</div>} />
      </Routes>
    </div>
  );
};

export default App;

