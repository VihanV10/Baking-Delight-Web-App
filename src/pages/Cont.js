import emailjs from '@emailjs/browser';
import './Cont.css'
import  { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cont() {
    const navigate = useNavigate(); //
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e7s0kps', '0iuqh87', form.current, 'tOg_hsFHTlnrjg7Wr')
          .then((result) => {
              console.log(result.text);
              navigate('/submitted');
          }, (error) => {
              console.log(error.text);
          });
          
        

      };
  return (
    <div>
    <p></p>
    <p></p>
    <p></p>
      <form className='form'ref={form} onSubmit={sendEmail}>
      <label>Name    </label>
      <input type="name" name="name" />
      <p></p><label>Email    </label>
      <input type="email" name="email" />
      <p></p><label>Message   </label>
      <textarea name="message" />
      <p></p><input type="submit"  className="button" value="Send" />
    </form>
      
    </div>
  )
}
