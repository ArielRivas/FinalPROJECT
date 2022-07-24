import './App.scss';
import NavBar from './NavBar/NavBar';
import { Outlet } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <NavBar />
      <Outlet />

    </div>
  );
}

export default App;
