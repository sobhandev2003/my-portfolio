import '../css/Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


import contactPage from '../assets/contactPage.jpeg';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
const Contact:React.FC = () => { 
//NOTE -This function send Email 
const formRef = useRef<HTMLFormElement>(null);
const sendEmail = (e:React.SyntheticEvent) => {
  e.preventDefault();

  if(!formRef.current){
    toast.error("Something Wrong!!")
    return;
  }

  emailjs.sendForm(import.meta.env.VITE_EmailJs_SERVICE_ID,
     import.meta.env.VITE_EmailJs_TEMPLATE_ID,
      formRef.current,
       {
      publicKey: import.meta.env.VITE_EmailJs_PUBLIC_KEY,
    })
    .then(
      () => {
        toast.success("Email Successfully Sent");
        formRef.current?.reset()
      },
      (error) => {
        toast.error( error.text)
      },
    );
};

  return <div id='contact'>
    <h1><span><TfiHeadphoneAlt /></span>Get In<span className='color-ff5500'> Touch</span></h1>
  <div className='contact-box'>
  <section className='image-section'>
      <img src={contactPage} alt=''></img>
    </section>
    <section className='contact-section'>
      <form className='contact-from' ref={formRef} onSubmit={sendEmail}>
        <label >
        <input type="text" className='input-field' name="name" minLength={3} maxLength={50} placeholder='' required />
        <span className='placeholder'><FaUser />Name </span>
      </label>
      <label >
      <input type="email" className='input-field' name="email" placeholder=''  maxLength={20} required/>
      <span className='placeholder'><MdEmail />Email</span>
      </label>
    <label >
    <input type="tel" className='input-field' name="phone" placeholder='' pattern="[0-9]{10}" required/>
    <span className='placeholder'><FaPhoneAlt />Phone</span>
    </label>
    <label >
    <textarea name="message" className='textarea-field'  placeholder='' minLength={10}  required spellCheck={true}/>
    <span className='textarea-placeholder'><BiMessageDetail />Message</span>
    </label>
      <button type="submit" className='send-btn'>Send<BsFillSendFill /></button>
      </form>
    </section>
  </div>
  </div>
}

export default Contact