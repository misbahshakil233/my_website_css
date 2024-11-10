// src/app/Component/ContactUs.js

"use client"; // Mark this component as a Client Component

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Submit the form data to an API or backend
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section style={contactSectionStyle}>
      <h2 style={titleStyle}>Contact Us</h2>
      {submitted && <p style={successMessageStyle}>Thank you! Your message has been sent.</p>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
          />
          {errors.message && <p style={errorStyle}>{errors.message}</p>}
        </div>

        <button type="submit" style={submitButtonStyle}>Send Message</button>
      </form>
    </section>
  );
}

// Styles
const contactSectionStyle = {
  maxWidth: '600px',
  margin: '3rem auto',
  padding: '2rem',
  borderRadius: '12px',
  backgroundColor: '#f7fbff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '2.2rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const inputGroupStyle = {
  textAlign: 'left',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
  minHeight: '120px',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.875rem',
};

const successMessageStyle = {
  color: 'green',
  fontSize: '1rem',
  marginBottom: '1rem',
};

const submitButtonStyle = {
  padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

submitButtonStyle[':hover'] = {
  backgroundColor: '#0056b3',
};
