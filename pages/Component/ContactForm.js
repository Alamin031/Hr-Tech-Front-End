import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.SENDGRID_API_KEY + '/api/contact', formData); // API call to send the message
      console.log('Message sent:', response.data);
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <Label>Name:</Label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label>Email:</Label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label>Message:</Label>
        <TextArea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <SubmitButton type="submit">Send</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
