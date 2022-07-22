import React from 'react'

const  Launch = () => {
  return (
     <section className='container__Launch'>
      <div className='container__Launch-card'>
        <h3>Push the button</h3>
        <p>Reaching destination: 15 min</p>
      </div>
      <span className='container__Launch-slider'></span>
      <button className='container__Launch-button'>Go</button>
    </section>
  )
}

export default Launch