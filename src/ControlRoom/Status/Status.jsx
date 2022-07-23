import React from 'react';
import imgStatus from '../../assets/controlRoom/spaceship-g9d3838581_1920.png';
import './Status.scss'
import Dashboard from './Dashboard';


const Status = () => {
  return (
    <section className='container__Status'>
       <div><img  className="container__Status-img " src={imgStatus} alt='spaceship Render'></img></div>
       <div className="container__Status-Dashboard-a"><Dashboard/></div>
       <div className="container__Status-Dashboard-b"><Dashboard/></div>
       <div className="container__Status-Dashboard-c"><Dashboard/></div>
    </section>
  )
}

export default Status;