import React from 'react'
import './Login.scss';
import loginTicket from '../assets/login/loginTicket.png'



const Login = () => {
  return (
    <div className='loginContainer'>

        <div className='formContainer'>
            <img className='loginTicket' src={loginTicket} /> 
            
            <form className='loginForm'>
            <label>
                <p>ID Number</p>
                <input type="text" name="ID" placeholder='Write your ID soldier' />
                </label>

                <label>
                <p>Email</p>
                <input type="text" name="ID" placeholder='Write your funny email' />
                </label>
            </form>

            <p>CHOOSE YOUR EVIL LEVEL</p>

            <div className='loginButtons'>
                <button className='loginButton'>Evil</button>
                <button className='loginButton'>Hero</button>
            </div>

            

            <button className=''>

            </button>
        </div>
        
    </div>
  )
}

export default Login