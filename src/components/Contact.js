import React from "react"
import ContactForm from "./ContactForm"
import { FaPhone, FaEnvelope, FaLocationArrow, FaFax } from "react-icons/fa"

const Contact = () => {
  return (
    <main className="contact">
      <div className="contact__title">
        <h1>İletişim</h1>
        <span className="material-icons">contacts</span>
      </div>

      <div className="contact__info">
        <a href="mailto:mail@en-ka.net" className="contact__email">
          <FaEnvelope className="contact-icon" />
          <span>bilgi@en-ka.net</span>
        </a>

        <a href="https://www.google.com.tr/maps/place/%C3%87al%C4%B1,+Beyaz+Cd.+No:2,+16110+Nil%C3%BCfer%2FBursa/@40.1715866,28.9246814,19z/data=!3m1!4b1!4m5!3m4!1s0x14ca10eb961611e5:0xeedd5a9564736371!8m2!3d40.1715856!4d28.9252286" className="contact__address">
          <FaLocationArrow className="contact-icon" />
          <address>Çalı Sanayi Bölgesi Beyaz Cadde No: 2 Nilüfer / BURSA</address>
        </a>

        <a href="tel:+90 553 304 18 09" className="contact__phone">
          <FaPhone className="contact-icon" style={{ transform: "rotate(225deg" }} />
          <span>+90 553 304 18 09</span>
        </a>

        <a href="tel:+90 850 644 51 38" className="contact__phone">
          <FaFax className="contact-icon" />
          <span>+90 850 644 51 38</span>
        </a>
      </div>

      <ContactForm />
    </main>
  )
}

export default Contact
