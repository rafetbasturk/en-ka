import { useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { pages } from "./data"
import logo from "../images/logo.png"
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // open links in mobile
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    isNavOpen ?
      linksContainerRef.current.style.height = `${linksHeight}px` :
      linksContainerRef.current.style.height = "0"
  }, [isNavOpen])

  // scroll
  const topContainerRef = useRef(null)
  const topRef = useRef(null)
  const listenToScroll = () => {
    const heightToHide = 25
    const winScroll = document.documentElement.scrollTop;
    (winScroll > heightToHide) ? setIsVisible(false) : setIsVisible(true)
  }
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    const topHeight = topRef.current.getBoundingClientRect().height

    isVisible ?
      topContainerRef.current.style.height = `${topHeight}px` :
      topContainerRef.current.style.height = "0"

    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [isVisible])

  return (
    <header className="header">

      <div className="header__top" ref={topContainerRef}>
        <div className="header__info" ref={topRef}>
          <a href="mailto:mail@en-ka.net" className="header__email">
            <FaEnvelope className="header-icon" />
            <span>bilgi@en-ka.net</span>
          </a>

          <a href="tel:+90 850 644 51 38" className="header__phone">
            <FaPhone className="header-icon" style={{transform: "rotate(90deg"}}/>
            <span>+90 850 644 51 38</span>
          </a>
        </div>
      </div>

      <div className="header__bottom">

        <Link to="/"><img className="header__logo" src={logo} alt="company logo" width="150px" height="auto" style={isVisible ? { width: "150px" } : { width: "80px" }} /></Link>

        <div className="header__menu">
          {isNavOpen && <FaTimes className="header__close" alt="close icon" onClick={() => setIsNavOpen(!isNavOpen)} />}
          {!isNavOpen && <FaBars className="header__ham" alt="menu icon" onClick={() => setIsNavOpen(!isNavOpen)} />}
        </div>

        <nav className="header__nav" ref={linksContainerRef} >
          <div className="header__nav-container" ref={linksRef} >
            {pages.map(page => {
              const { id, url, text } = page
              return (
                <Link
                  to={url}
                  key={id}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      window.scrollTo(0, 0)
                      setIsNavOpen(!isNavOpen)
                    } else {
                      window.scrollTo(0, 0)
                    }
                  }}
                >
                  <p>{text}</p>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
