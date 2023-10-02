import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Link to='/'>Index</Link>
      <Link to="/user/login">Log in</Link>
    </div>
  )
}

export default Header;