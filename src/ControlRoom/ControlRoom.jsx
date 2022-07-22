import "./ControlRoom.scss"
import { Link } from 'react-router-dom';
import  Imgrocket  from '../assets/controlRoom/ControlRoomRocket.png'

const ControlRoom = () => {
    return (
      <section className="container__ControlRoom">
        <div className="container__ControlRoom-Decoration">
          <h4>PP02<span>3.58</span>minimun</h4>
          <h4>Cabin temp<span></span>°C</h4>
          <h4>Cabin pressure<span>minum</span></h4>
          <h4>CO2<span></span>good</h4>
        </div>
         <div className="container__ControlRoom-Buttons">
         <Link to="/todoContainer"><button className="ControlRoom__Buttons-Button">Go to <span>do list</span></button></Link>
         <Link to="/navigation"><button className="ControlRoom__Buttons-Button">Go to <span>navigation</span></button></Link>
         <Link to="/status"><button className="ControlRoom__Buttons-Button">Go to <span>status</span></button></Link>
         <Link to="/launch"><button className="ControlRoom__Buttons-Button">Go to <span>launch</span></button></Link>
      </div>
      <div className="container__ControlRoom-Connections">
        <h4>Connections</h4>
        <p>Data-handling</p>
        <p>Connected</p>
        <p>Antennas</p>
        <p>Connected</p>
        <p>Thermal Systems</p>
        <p>Connected</p>
        <p>Electrical Power</p>
        <p>Connected</p>
      </div>
      <span className="container__ControlRoom-RocketImg"><img src={Imgrocket} alt="rocketImage"></img></span>
      <div className="container__ControlRoom-Connections">
        <h4>Connections</h4>
        <p>Attitude and Orbit Control</p>
        <p>Connected</p>
        <p>Payload</p>
        <p>Connected</p>
        <p>Fine Pointing Sun Sensor(FPSS)</p>
        <p>Connected</p>
        <p>Integrated Spacecraft Controller (ISC)</p>
        <p>Desactivated</p>
      </div>
      <div className="container__ControlRoom-TextHeadline">
        <h3>Vehicle overview</h3>
      </div>
</section>
    );
  };
  
  export default ControlRoom;