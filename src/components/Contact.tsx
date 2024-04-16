import '../css/Contact.css'
import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';


import contactPage from '../assets/contactPage.jpeg';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { mailOptionType, sendEmail } from '../services/sendContactEmail';
const Contact:React.FC = () => { 
//NOTE -This function send Email 
const formRef = useRef<HTMLFormElement>(null);

const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: ''
});
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  const { name, value } = e.target;
  setFormData((prevState:any) => ({
    ...prevState,
    [name]: value
  }));
};

const handelSubmit = async(e:React.SyntheticEvent) => {
  e.preventDefault();

  console.log(formData)

  const mailOption:mailOptionType={
    mailSendFrom:formData.email,
    mailSendTo:"sobhandevp2021@gmail.com",
    mailSubject:`Get email from ${formData.name}`,
    phoneNumber:formData.phone,
    mailText:formData.message
  }
   const success=await sendEmail(mailOption)
  if (success) {
    if (formRef.current) {
      formRef.current.reset()
    }
  
  }
 

};

  return <div id='contact'>
    <h1><span><TfiHeadphoneAlt /></span>Get In<span className='color-ff5500'> Touch</span></h1>
  <div className='contact-box'>
  <section className='image-section'>
      <img src={contactPage} alt=''></img>
    </section>
    <section className='contact-section'>
      <form className='contact-from' ref={formRef} onSubmit={handelSubmit}>
        <label >
        <input type="text" className='input-field' name="name"  onChange={handleChange} minLength={3} maxLength={50} placeholder='' required />
        <span className='placeholder'><FaUser />Name </span>
      </label>
      <label >
      <input type="email" className='input-field' name="email" onChange={handleChange} placeholder=''   required/>
      <span className='placeholder'><MdEmail />Email</span>
      </label>
    <label >
    <input type="tel" className='input-field' name="phone" onChange={handleChange} placeholder='' pattern="[0-9]{10}" required/>
    <span className='placeholder'><FaPhoneAlt />Phone</span>
    </label>
    <label >
    <textarea name="message" className='textarea-field' onChange={handleChange}  placeholder='' minLength={10}  required spellCheck={true}/>
    <span className='textarea-placeholder'><BiMessageDetail />Message</span>
    </label>
      <button type="submit" className='send-btn'>Send<BsFillSendFill /></button>
      </form>
    </section>
  </div>
  </div>
}

export default Contact