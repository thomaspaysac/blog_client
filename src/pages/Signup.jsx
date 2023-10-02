import Header from "../components/Header"

export const Signup = () => {
  return (
    <div>
      <Header />
      <h2>Sign up</h2>
      <form id='signup_form'>
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
          <input type='password' id ='password_confirm' name='password confirm' />
        </div>
      </form>
    </div>
  )
}