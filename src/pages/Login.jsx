import { Link } from "react-router-dom"
import Header from "../components/Header"

export const Login = () => {
  return (
    <div>
      <Header />
      <h2>Log in</h2>
      <form id='login_form'>
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