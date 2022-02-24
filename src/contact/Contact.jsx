import React, { useRef, useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () =>{
   const formRef = useRef();
   const [done, setdone] = useState(false);

   const Data = (e)=>{
       e.preventDefault();
       emailjs.sendForm('kunal', 'template_ae21w5e', formRef.current, 'user_ASCguqYENI1qE3cDxrJS5')
      .then((result) => {
          console.log(result.text);
          setdone(true);
      }, (error) => {
          console.log(error.text);
      });
   }
  return (
    <div className='c'>
    <div className='c-bg'></div>
    <div className='c-wrapper'>
    <div className='c-left'>
    <h1 className='c-title'>lets discuss your project</h1>
    <div className='c-info'>
    <div className='c-info-item'>
    <img src="phone1.jpg" className='c-icon' alt=""/>
    +91 9588234678
    </div>
    
    <div className='c-info-item'>
    <img src="mail1.jpg" className='c-icon' alt=""/>
    94kumalsain@gmail.com
    </div>

    <div className='c-info-item'>
    <img src="home1.jpg" className='c-icon' alt=""/>
    245 New vihar Haryana
    India
    </div>
    </div>
    </div>
    <div className='c-right'>
    <p className='c-disc'>
    <b>What's your story? Get in Touch Always freelancing if the 
     right project comes along</b>
    </p>
    <form ref={formRef} onSubmit={Data}>
    <input type="text" placeholder='Name' name='user_name'></input>
    <input type="text" placeholder='Subject' name='user_subject'></input>
    <input type="text" placeholder='Email' name='user_email'></input>
    <textarea rows="5" placeholder='Message' name='message'></textarea>
    <button>Submit</button>
    {done && 'Thank you.....'}
    </form>
    </div>
    </div>
     </div>
  );
};

export default Contact;


