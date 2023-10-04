import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Username = () => {
  if (!localStorage.username) {
    return null;
  }
  return (
    <span>{localStorage.username}, {localStorage.user_id}</span>
  )
}

const Header = () => {
  const navigateTo = useNavigate();

  const logout = async () => {
    if (window.confirm('Do you really want to log out ?')) {
      localStorage.clear();
      navigateTo('/');
    } else {
      return;
    }
  }

  return (
    <div>
      <Link to='/'>Index</Link>
      <Link to="/user/login">Log in</Link>
      <button onClick={logout}>Logout</button>
      <span>User: <Username /></span>
    </div>
  )
}

export default Header;