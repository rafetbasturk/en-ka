import { FaPhone, FaEnvelope, FaLocationArrow, FaUser } from "react-icons/fa"


const Contact = () => {
  return (
    <main className="contact">
      <div className="contact__title">
        <h1>İletişim</h1>
      </div>

      <div className="contact__info">
        <a href="https://www.google.com.tr/maps/place/%C3%87al%C4%B1,+Beyaz+Cd.+No:2,+16110+Nil%C3%BCfer%2FBursa/@40.1715866,28.9246814,19z/data=!3m1!4b1!4m5!3m4!1s0x14ca10eb961611e5:0xeedd5a9564736371!8m2!3d40.1715856!4d28.9252286" className="contact__address">
          <FaLocationArrow className="contact-icon" />
          <address>Beyaz Cad. No: 2 Çalı / BURSA</address>
        </a>

        <a href="mailto:mail@en-ka.net" className="contact__email">
          <FaEnvelope className="contact-icon" />
          <span>bilgi@en-ka.net</span>
        </a>

        <a href="tel:+90 850 644 51 38" className="contact__phone">
          <FaPhone className="contact-icon" />
          <span>+90 850 644 51 38</span>
        </a>
      </div>

      <form className="contact__form">
        <div className="contact__inputs">
          <div className="contact__left">
            <h3 className="contact__form-title">İletişim Formu</h3>
            <div className="contact__input">
              <label htmlFor="name">Ad</label>
              <FaUser className="contact-icon" />
              <input type="text" name="name" id="name" required />
            </div>
            <div className="contact__input">
              <label htmlFor="mail">E-posta</label>
              <FaEnvelope className="contact-icon" />
              <input type="email" name="mail" id="mail" required />
            </div>
          </div>
          <div className="contact__right">
            <label htmlFor="message">Mesaj</label>
            <textarea name="message" id="message" required></textarea>
          </div>
        </div>
        <button type="submit" className="contact__button">Gönder</button>
      </form>
    </main>
  )
}

export default Contact
