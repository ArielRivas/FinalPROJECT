import { handleSubmit, React } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Login.scss';
import loginTicket from '../assets/login/loginTicket.png'
import { loginUser } from "../redux/auth/auth.actions";
import { API } from '../shared/Api';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectEvil = () => navigate('/'); // Reemplazar URL
  const redirectHero = () => navigate('/'); // Remplazar URL

  const doLogin = (event) => {
    event.preventDefault();

    const idInput = document.querySelector("#id");
    const emailInput = document.querySelector("#email");
    const id = idInput.value;
    const email = emailInput.value;

    const isEvil = document.querySelector("#evil").checked ? true : false;

    if (isEvil) {
      dispatch(loginUser(id, email, redirectEvil));
    }
    else {
      dispatch(loginUser(id, email, redirectHero));
    }
  }

  const onSubmit = (formData) => {
    API.post("api/users/login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
    })
  }

  return (
    <div className='loginContainer'>

      <div className='formContainer'>
        <img className='loginTicket' src={loginTicket} alt="imgLogin" />

        <form className='loginForm' onSubmit={onsubmit}>
          <label>
            <p>ID Number</p>
            <input id="id" type="text" name="ID" required placeholder='Write your ID soldier' />
          </label>

          <label>
            <p>Email</p>
            <input type="text" id="email" name="email" required placeholder='Write your funny email' />
          </label>

          <p>CHOOSE YOUR EVIL LEVEL</p>

          <ul className="levels">
            <li className="lgnButton">
              <input type="radio" id="evil" required name="level" />
              <label htmlFor="evil">Evil</label>
            </li>
            <li className="lgnButton">
              <input type="radio" id="hero" required name="level" />
              <label htmlFor="hero">Hero</label>
            </li>
          </ul>

          <button type="submit" className="btnLogin">SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Login