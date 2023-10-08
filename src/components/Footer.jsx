import { Link } from "react-router-dom"
import githubLogo from '../assets/github.png';

export const Footer = () => {
  return (
    <footer>
      <Link to='/disclaimer'>Disclaimer</Link>
      <a href="https://github.com/stagnant-sys"><img src={githubLogo} alt='' title='Find me on GitHub' /></a>
      
    </footer>
  )
}