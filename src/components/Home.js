import React, { useState, useEffect } from 'react';
import { pics } from "./data"
import { ImQuestion } from "react-icons/im"
import { BiNetworkChart } from "react-icons/bi"
import { DiModernizr } from "react-icons/di"

const Home = () => {
  const [index, setIndex] = useState(0)
  const [slide, setSlide] = useState(pics[index])

  const next = () => {
    setIndex(index === pics.length - 1 ? 0 : index + 1)
  }

  const prev = () => {
    setIndex(index === 0 ? pics.length - 1 : index - 1)
  }

  useEffect(() => {
    const intervalSlide = setInterval(() => {
      setIndex(index === pics.length - 1 ? 0 : index + 1)
    }, 5000);
    setSlide(pics[index])

    return () => clearInterval(intervalSlide)
  }, [index])

  const {
    id,
    img_small: small,
    img_medium: medium,
    img_large: large,
    title
  } = slide

  return (
    <>
      <main className="main">
        <section
          key={id}
          className="main__slide"
        >
          <img
            loading={index !== 0 ? "lazy" : "eager"}
            className="main__image"
            srcSet={`${small} 500w, ${medium} 800w, ${large} 2000w`}
            sizes="(min-width: 1520px) 1140px, (min-width: 1200px) calc(80vw - 60px), (min-width: 780px) calc(100vw - 64px), 100vw"
            alt={title}
            src={small}
            width="100%"
            height="auto"
          />

          <div className="main__info-container">
            <div className="main__title-container">
              <h2 className="main__title" >{title}</h2>
            </div>
            <div className="main__dots">
              {
                pics.map((pic, i) => {
                  return (
                    <span
                      key={i}
                      className="main__dot"
                      style={{ background: `${index === i ? "white" : ""}` }}
                      onClick={() => setIndex(i)}
                    ></span>
                  )
                })
              }
            </div>
          </div>
        </section>

        <button className="main__left" onClick={prev} aria-label="left arrow">
          <svg width="14" height="24">
            <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
          </svg>
        </button>
        <button className="main__right" onClick={next} aria-label="right arrow">
          <svg width="14" height="24">
            <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
          </svg>
        </button>
      </main>

      <section className="intro">
        <div className="intro__div">
          <ImQuestion className="intro__icon" />
          <div className="intro__box">
            <h3>B??Z K??M??Z</h3>
            <p>Makine ve kal??p sekt??r??n??n tala??l?? imalat??na y??nelik edindi??imiz deneyim ve tecr??belerimizi, 2015 y??l??nda En-Ka Makine Kal??p ad?? alt??nda birle??tirdik ve siz de??erli m????terilerimize ??al?? Sanayi B??lgesi'nde hizmet vermeye devam etmekteyiz.</p>
          </div>
        </div>
        <div className="intro__div">
          <BiNetworkChart className="intro__icon" />
          <div className="intro__box">
            <h3>M??SYONUMUZ</h3>
            <p>Tala??l?? imalatta kalite y??netimi do??rultusunda teknolojik ????z??mler geli??tiren, s??rekli geli??imden yana, m????teri memnuniyeti odakl??, kaliteli ??r??n ve m????teriye zaman??ndan ??nce teslimat yapan, T??rkiye'de bilinen bir marka olmak.</p>
          </div>
        </div>
        <div className="intro__div">
          <DiModernizr className="intro__icon" />
          <div className="intro__box">
            <h3>V??ZYONUMUZ</h3>
            <p>Metal sekt??r??nde teknolojiyi s??rekli takip ederek, m????teri ihtiya?? ve beklentilerine en uygun ??r??n ve hizmetleri sunan, T??rkiye'nin ??evre dostu bir ??retim merkezi olmak.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
