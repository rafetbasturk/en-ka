import { useState, useEffect } from 'react';
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
    }, 10000);
    setSlide(pics[index])

    return () => clearInterval(intervalSlide)
  }, [index])

  const {
    id,
    img_small: small,
    img_medium: medium,
    img_large: large,
    title,
    // quote
  } = slide
  // const { id, img_small: small, title, quote } = slide

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
            srcSet={`${small} 400w, ${medium} 600w, ${large} 800w`}
            sizes="(min-width: 1520px) 1140px, (min-width: 1200px) calc(80vw - 60px), calc(96.36vw - 21px)"
            alt={title}
            src={small}
            width="100%"
            height="auto"
          />

          {/* <div className="main__info-container">
            <div className="main__info">
              <h2 className="main__title" >{title}</h2>
              <p className="main__text" >{quote}</p>
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
          </div> */}
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
            <h3>BİZ KİMİZ</h3>
            <p>Makine ve kalıp sektörünün talaşlı imalatına yönelik edindiğimiz deneyim ve tecrübelerimizi, 2015 yılında En-Ka Makine Kalıp adı altında birleştirdik ve siz değerli müşterilerimize Çalı Sanayi Bölgesi'nde hizmet vermeye devam etmekteyiz.</p>
          </div>
        </div>
        <div className="intro__div">
          <BiNetworkChart className="intro__icon" />
          <div className="intro__box">
            <h3>MİSYONUMUZ</h3>
            <p>Talaşlı imalatta kalite yönetimi doğrultusunda teknolojik çözümler geliştiren, sürekli gelişimden yana, müşteri memnuniyeti odaklı, kaliteli ürün ve müşteriye zamanından önce teslimat yapan, Türkiye'de bilinen bir marka olmak.</p>
          </div>
        </div>
        <div className="intro__div">
          <DiModernizr className="intro__icon" />
          <div className="intro__box">
            <h3>VİZYONUMUZ</h3>
            <p>Metal sektöründe teknolojiyi sürekli takip ederek, müşteri ihtiyaç ve beklentilerine en uygun ürün ve hizmetleri sunan, Türkiye'nin çevre dostu bir üretim merkezi olmak.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
