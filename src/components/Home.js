import { useState, useEffect } from 'react';
import { pics } from "./data"

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

  const { id, img_small: small, img_medium: medium, img_large: large, title, quote } = slide

  return (
    <main className="main">

      <article key={id} className="main__slide">
        <div className="main__info">
          <h2 className="main__title" >{title}</h2>
          <p className="main__text" >{quote}</p>
        </div>
        <img
          srcSet={`${small} 320w, ${medium} 768w, ${large} 1200w`}
          sizes="(max-width: 480px) 320px, (max-width: 1000px) 768px, 1200px"
          alt={title} className="main__image"
          src={small}
          width="100%"
          height="300px"
        />
      </article>

      <div className="main__arrows">
        <button className="main__left" onClick={prev} aria-label="Left Arrow">
          <svg width="14" height="24">
            <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
          </svg>
        </button>
        <button className="main__right" onClick={next} aria-label="Right Arrow">
          <svg width="14" height="24">
            <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
          </svg>
        </button>
      </div>

    </main>
  )
}

export default Home
