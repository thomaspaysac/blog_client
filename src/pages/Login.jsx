import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

export const Login = () => {
  const navigateTo = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const form = document.getElementById('login_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    await fetch(`https://blogapi-production-5dee.up.railway.app/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    navigateTo('/');
  }

  return (
    <div>
      <Header />
      <h2>Log in</h2>
      <form id='login_form' onSubmit={login}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type='text' id='username' name='username' />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input type='password' id='password' name='password'/>
        </div>
        <button type='submit'>Login</button>
      </form>
      <div>
        Don't have an account? <Link to='/user/signup'>Signup</Link>
      </div>
    </div>
  )
}