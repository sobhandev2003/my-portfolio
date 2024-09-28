import React, { useRef, useState } from 'react';
import { mailOptionType, sendEmail } from '../services/sendContactEmail';
import { toast } from 'react-toastify';
import { GrContact } from "react-icons/gr";
import { TextField } from '@mui/material';
import { GiCrossMark } from "react-icons/gi";
import { BsFillSendFill } from "react-icons/bs";
const Contact: React.FC = () => {
  //NOTE -This function send Email 
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isContact, setIsContact] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handelSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const mailOption: mailOptionType = {
      mailSendFrom: formData.email,
      mailSendTo: "sobhandevp2021@gmail.com",
      mailSubject: `Get email from ${formData.name}`,
      phoneNumber: formData.phone,
      mailText: formData.message
    }
    const success = sendEmail(mailOption)
    toast.promise(success, {
      pending: 'Sending...',
      success: 'Message sent successfully.',
      error: 'Failed to send email. Please try again later.'
    });

    success.then((res) => {
      if (res) {
        if (formRef.current) {
          formRef.current.reset()
        }
      }
    })
  };




  return (<div ref={contactRef} className='' >
    {!isContact && <button
      className='bg-[#f39c12] text-white py-2 px-4  rounded-t-xl'
      onClick={() => setIsContact(true)}
    >
      <GrContact fontSize={"2rem"} />
    </button>}
    {isContact && <div className='z-20 w-80  p-3 py-8 border bg-white rounded-t-xl'>
      <button
        className=' absolute -right-1 -top-[2%] italic text-red-600 '
        onClick={() => setIsContact(false)}
      >
        <GiCrossMark fontSize={"1.5rem"} fontWeight={500} fontStyle={"italic"} />
      </button>
      <form className='flex flex-col gap-2 relative w-full mb-4 ' ref={formRef} onSubmit={handelSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name='name'
          onChange={handleChange}
          inputProps={{ minLength: 3, maxLength: 50 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          name='email'
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          type='tel'
          name='phone'
          onChange={handleChange}
          inputProps={{ minLength: 10, maxLength: 10 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Message"
          name='message'
          type="text"
          onChange={handleChange}
          inputProps={{ minLength: 10 }}
          multiline
          rows={3}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& textarea': {
                overflowY: 'scroll',
                scrollbarWidth: "none",
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              },
            },
          }}
        />

        <button type="submit" className='absolute -bottom-[15%] right-1 py-1 px-3 text-white bg-[#4bcffa] rounded-lg'><BsFillSendFill fontSize={"1.2rem"} /></button>
      </form>
    </div>}

  </div>)
}

export default Contact