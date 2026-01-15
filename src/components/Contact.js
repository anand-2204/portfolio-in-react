import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <a href="mailto:your@gmail.com">anandknpr6992@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-icon">🔗</span>
              <a href="https://github.com/anand-2204" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="info-item">
              <span className="info-icon">💼</span>
              <a href="https://www.linkedin.com/in/anand-kumar-860028287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;