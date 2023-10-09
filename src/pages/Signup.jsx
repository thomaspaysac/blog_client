import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import { Footer } from "../components/Footer";

export const Signup = () => {
  const [error, setError] = useState();
  const navigateTo = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const form = document.getElementById('signup_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    const req = await fetch(`https://blogapi-production-5dee.up.railway.app/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const errors = await req.json();
    if (errors.length > 0) {
      setError(errors);
    } else {
      navigateTo('/user/login');
    }
  }

  const ErrorMessage = () => {
    if (!error) {
      return null;
    }
    
    return (
      <div className="error_container">
        <ul>
        {
            error.map((el, i) => {
              return (
                <li key={i}>
                  {el.msg}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <h2 className="page-title">Sign up</h2>
        <ErrorMessage />
        <form id='signup_form' className='form' onSubmit={signup}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type='text' id='username' name='username' />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type='password' id='password' name='password' />
          </div>
          <div>
            <label htmlFor="password_confirm">Confirm password: </label>
            <input type='password' id='password_confirm' name='password_confirm' />
          </div>
          <button type='submit' className="button_primary">Sign up</button>
        </form>
      </main>
      <Footer />
    </>
  )
}