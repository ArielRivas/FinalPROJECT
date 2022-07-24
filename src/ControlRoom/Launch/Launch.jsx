import React from "react";
import "./Launch.scss";
import { Link } from "react-router-dom";

const Launch = () => {
  return (
    <section className='container__Launch'>
      <div className='container__Launch-card'>
        <h3>Push the button</h3>
        <p>Reaching destination: 15 min</p>
        <span className='container__Launch-slider'></span>
        <Link to='/rocketvideos'>
        <button className='container__Launch-button'>Go</button></Link>
      </div>
    </section>
  );
};

export default Launch;
