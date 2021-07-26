import { Link } from "react-router-dom"
import { pages, social } from "./data"
import logo from "../images/logo.png"

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__logo-container" >
        <img className="footer__logo" src={logo} alt="company logo" width="150px" height="auto" />
      </div>

      <ul className="footer__nav">
        {pages.map(page => {
          const { id, url, text } = page
          return (
            <Link
              to={url}
              key={id}
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>{text}</li>
            </Link>
          )
        })}
      </ul>

      <div className="footer__social">
        {
          social.map(item => {
            const { id, url, icon } = item
            return (
              <a key={id} href={url} rel="noopener noreferrer" >{icon}</a>
            )
          })
        }
      </div>

      <p className="footer__copy">
        <span>© {new Date().getFullYear()}</span>
        <img src={logo} width="50px" height="auto" alt="company logo" />
        <span>Tüm hakları saklıdır.</span>
      </p>
    </footer>
  )
}

export default Footer
