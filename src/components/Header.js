import React, { useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { pages } from "./data"
import logo from "../images/logo.png"
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa"

const Header = ({ page, setPage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // open hamburger menu in mobile
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    isNavOpen ?
      linksContainerRef.current.style.height = `${linksHeight}px` :
      linksContainerRef.current.style.height = "0"
  }, [isNavOpen])

  // scroll and close header__top - shrink header__logo
  const topContainerRef = useRef(null)
  const logoContainer = useRef(null)

  const listenToScroll = () => {
    const heightToHide = 10
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    (winScroll > heightToHide) ? setIsVisible(false) : setIsVisible(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    if (isVisible) {
      topContainerRef.current.style.height = `32px`
      logoContainer.current.style.width = "120px"
    } else {
      topContainerRef.current.style.height = "0"
      logoContainer.current.style.width = "80px"
    }

    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [isVisible])

  return (
    <header className="header">

      <div className="header__top" ref={topContainerRef}>
        <div className="header__info">
          <a href="mailto:mail@en-ka.net" className="header__email">
            <FaEnvelope className="header-icon" />
            <span>bilgi@en-ka.net</span>
          </a>

          <a href="tel:+90 850 644 51 38" className="header__phone">
            <FaPhone className="header-icon" />
            <span>+90 850 644 51 38</span>
          </a>
        </div>
      </div>

      <div className="header__bottom">
        <Link to="/">
          <img
            width="120"
            height="auto"
            className="header__logo"
            src={logo}
            alt="company logo"
            ref={logoContainer}
            onClick={() => setPage("Ana Sayfa")}
          />
        </Link>

        <div className="header__menu">
          {isNavOpen &&
            <FaTimes
              className="header__close"
              alt="close icon"
              onClick={() => {
                setIsNavOpen(!isNavOpen)
              }}
            />
          }
          {!isNavOpen &&
            <FaBars
              className="header__ham"
              alt="menu icon"
              onClick={() => {
                setIsNavOpen(!isNavOpen)
              }}
            />
          }
        </div>

        <nav className="header__nav" ref={linksContainerRef} >
          <div className="header__nav-container" ref={linksRef} >
            {pages.map(item => {
              const { id, url, text } = item
              return (
                <Link
                  to={url}
                  key={id}
                  className={page === text ? "active" : ""}
                  onClick={() => {
                    setPage(text)
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
