import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
        console.log(formData);
        setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  return (
    <div className="contact-container">
          <div className="navbar-spacer"></div>
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {isSubmitted && <p className="submission-message">Thank you for contacting us! We will get back to you soon.</p>}

      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p><strong>Phone:</strong> +91 6698552424</p>
        <p><strong>Email:</strong> foodiedelight@gmail.com</p>
        <p><strong>Address:</strong> 978 Food Street, Food City, 57992</p>
      </div>
      <div className="map-container">
        <h2>Find Us Here:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.7055982585224!2d-73.98655768436873!3d40.74881717932808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af0b8b8e83%3A0x2bfa10e2bca68b5!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
