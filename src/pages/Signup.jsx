import { useNavigate } from "react-router-dom";
import Header from "../components/Header"

export const Signup = () => {
  const navigateTo = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const form = document.getElementById('signup_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    await fetch(`https://blogapi-production-5dee.up.railway.app/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    navigateTo('/user/login');
  }

  return (
    <>
      <Header />
      <main>
        <h2 className="page-title">Sign up</h2>
        <form id='signup_form' className='form' onSubmit={signup}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type='text' id='username' name='username' />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type='password' id='password' name='password' />
          </div>
          <button type='submit'>Sign up</button>
        </form>
      </main>
      
    </>
  )
}