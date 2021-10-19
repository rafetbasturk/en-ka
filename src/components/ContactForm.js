import { useState } from "react"
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa"

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    mail: "",
    phone: "",
    message: ""
  })

  const handleChange = e => {
    const { name, value } = e.target

    setInputs(prev => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <form className="contact__form">
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
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__input">
            <label htmlFor="mail">E-posta <sup>*</sup> </label>
            <FaEnvelope className="contact-icon" />
            <input
              type="email"
              name="mail"
              id="mail"
              value={inputs.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__input">
            <label htmlFor="phone">Telefon</label>
            <FaPhone className="contact-icon" style={{ transform: "rotate(90deg" }} />
            <input
              type="phone"
              name="phone"
              id="phone"
              value={inputs.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contact__right">
          <label htmlFor="message">Mesaj <sup>*</sup></label>
          <textarea
            name="message"
            id="message"
            required
            value={inputs.message}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="contact__button" aria-label="send form" >Gönder</button>
    </form>
  )
}

export default ContactForm
