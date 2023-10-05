import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  if (localStorage.role !== 'admin') {
    return null;
  }
  return (
    <div>
      Admin
    </div>
  )
}

const UserContainer = () => {
  const navigateTo = useNavigate();

  const logout = async () => {
    if (window.confirm('Do you really want to log out ?')) {
      localStorage.clear();
      navigateTo('/');
    } else {
      return;
    }
  }

  if (!localStorage.logged_in) {
    return (
      <Link to="/user/login">Log in</Link>
    )
  }
  return (
    <div>
      <span>{localStorage.username}</span>
      <AdminDashboard />
      <button onClick={logout}>Logout</button>
    </div>
  )
}



const Header = () => {
  return (
    <div>
      <Link to='/'>Index</Link>
      <UserContainer />
    </div>
  )
}

export default Header;