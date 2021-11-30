import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result=()=>{
    return(
        <p>send email successfully. </p>
    )
}
const ContactUs = () => {
const [result,setResult]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail','template_5p7a9gw',e.target,'user_2cP2DOfuMj6B63V5HbYsB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true)
          
      };
      setTimeout(()=>{
          setResult(false)
      },5000)
    return (
        <div className="h-75">
          <form  onSubmit={sendEmail}>
              <div className="w-100">
                  <div className='col-8 pt-2  form-group mx-auto'>
                      <label>Name : </label>
                    <input type="text" placeholder='name'className='w-75 mx-2 ' name="name" />
                  </div>
                  <div className='col-8 pt-2 mt-3 form-group mx-auto'>
                    <label>Email : </label>
                    <input type="email" placeholder='email'className='from-control w-75 mx-2 ' name="email" />
                  </div>
                  <div className='col-8 pt-2   mt-3 form-group mx-auto'>
                    <label>Subject : </label>
                    <input type="text" placeholder='name'className='from-control w-75 mx-2 ' name="subject" />
                  </div>
                  <div className='col-8 pt-2  mt-3 form-group mx-auto mx-2 '>
                    <label>Massage : </label>
                    <input type="text" placeholder='massage'cols="30" row="8" className=' mt-3 mx-2 from-control w-75' name="massage" />
                  </div>
                  <div>
                    <input type="submit" value="Send massage" className="btn btn-primary my-4 px-5"/>
                  </div>
                  <div>{result ? <Result/> : null}</div>
                  
              </div>
            
            
            </form>
      </div>
    );
};

export default ContactUs;