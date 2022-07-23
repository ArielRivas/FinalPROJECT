import "./ControlRoom.scss";
import { Link } from "react-router-dom";
import Imgrocket from "../assets/controlRoom/ControlRoomRocket.png";

const ControlRoom = () => {
  return (
      <section className='container__ControlRoom-component'>
      
          <div className='container__ControlRoom-Decoration'>
            <button>PP02<span><br></br>3.58<br></br>minimun</span></button>
            <button>Cabin temp<br></br><span>2.41</span><br></br>°C</button>
            <button>Cabin pressure<br></br><span>14.00<br></br>minum</span></button>
            <button>CO2<br></br><span>0.07</span><br></br>good</button>
          </div>

          <div className='container__ControlRoom-Buttons'>
            <Link to='/todoContainer'>
            <button className='ControlRoom__Buttons-Button'>Go to<span><br></br>do list</span></button>
            </Link>
            <Link to='/navigation'>
              <button className='ControlRoom__Buttons-Button'>Go to<span><br></br>navigation</span></button>
            </Link>
            <Link to='/status'>
              <button className='ControlRoom__Buttons-Button'>Go to<span><br></br>status</span></button>
            </Link>
            <Link to='/launch'>
              <button className='ControlRoom__Buttons-Button'>Go to<span><br></br>launch</span></button>
            </Link>
          </div>
        <div  className='container__ControlRoom-Connections'>
          <div className='container__ControlRoom-Connections-a'>
            <h4>Connections</h4>
            <h3>Data-handling</h3>
            <p>Connected</p>
            <h3>Antennas</h3>
            <p>Connected</p>
            <h3>Thermal Systems</h3>
            <p>Connected</p>
            <h3>Electrical Power</h3>
            <p>Connected</p>
          </div>
         
          <div className='container__ControlRoom-Connections-b'>
            <h4>Connections</h4>
            <h3>Attitude and Orbit Control</h3>
            <p>Connected</p>
            <h3>Payload</h3>
            <p>Connected</p>
            <h3>Fine Pointing Sun Sensor(FPSS)</h3>
            <p>Connected</p>
            <h3>Integrated Spacecraft Controller (ISC)</h3>
            <p>Desactivated</p>
          </div>
          </div>
          <div className='container__ControlRoom-TextHeadline'>
            <h3>Vehicle overview</h3>
          </div>
       
        <span className='container__ControlRoom-RocketImg'>
        <img src={Imgrocket} alt='rocketImage'></img></span>
      </section>
  );
};

export default ControlRoom;
