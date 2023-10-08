import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { Footer } from "../components/Footer"

export const Login = () => {
  const [error, setError] = useState(false);
  const navigateTo = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const form = document.getElementById('login_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    const req = await fetch(`https://blogapi-production-5dee.up.railway.app/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (req.status !== 200) {
      setError(true);
    } else {
      const result = await req.json();
      localStorage.setItem('username', result.userInfo.username);
      localStorage.setItem('user_id', result.userInfo._id);
      localStorage.setItem('role', result.userInfo.role);
      localStorage.setItem('logged_in', true);
      navigateTo('/');
    }
  }

  const ErrorMessage = () => {
    if (!error) {
      return null;
    }

    return (
      <div className="error_container">
        Error: check your username and your password.
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <h2 className="page-title">Log in</h2>
        <ErrorMessage />
        <form id='login_form' className="form" onSubmit={login}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type='text' id='username' name='username' />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type='password' id='password' name='password'/>
          </div>
          <button type='submit' className="button_primary">Log in</button>
        </form>
        <div>
          Don't have an account? <Link to='/user/signup'>Sign up</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}