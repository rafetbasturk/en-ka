import React, { useState, useRef, useEffect } from "react"
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa"

const Sent = () => {
  return (<div className="sent">
    <p>Mesajınız için teşekkürler. En kısa sürede sizinle iletişime geçilecektir.</p>
  </div>)
}

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false)
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_3k5wdbq', 'template_0jxxyb8', form.current, 'user_HDzlp8KAJoxhfvQA6I0B3')
      .then((result) => {
        setSuccessMessage(true)
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset()
  }

  useEffect(() => {
    const timer = setTimeout(() => setSuccessMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <>
      <form
        className="contact__form"
        onSubmit={handleFormSubmit}
        ref={form}
      >
        <h3 className="contact__form-title">İletişim Formu</h3>
        <div className="contact__inputs">
          <div className="contact__left">
            <div className="contact__input">
              <label htmlFor="name">Ad <sup>*</sup></label>
              <FaUser className="contact-icon" />
              <input
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="contact__input">
              <label htmlFor="email">E-posta <sup>*</sup> </label>
              <FaEnvelope className="contact-icon" />
              <input
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="contact__input">
              <label htmlFor="phone">Telefon <sup>*</sup> </label>
              <FaPhone className="contact-icon" style={{ transform: "rotate(90deg" }} />
              <input
                type="phone"
                name="phone"
                id="phone"
                required
              />
            </div>
          </div>
          <div className="contact__right">
            <label htmlFor="message">Mesaj <sup>*</sup></label>
            <textarea
              name="message"
              id="message"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="contact__button" aria-label="send form" >Gönder</button>
      </form>
      {successMessage ? <Sent/> : null}
    </>
  )
}

export default ContactForm
