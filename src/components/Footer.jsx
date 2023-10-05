import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <Link to='/disclaimer'>Disclaimer</Link>
      <a href="https://github.com/stagnant-sys">GitHub</a>
    </footer>
  )
}