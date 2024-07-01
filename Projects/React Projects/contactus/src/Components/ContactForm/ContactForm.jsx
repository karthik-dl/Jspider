import React, { useState } from 'react'
import style from "./ContactForm.module.css"
import callerImage from "../../Imgages/contactimag.jpg"
import { Button } from './../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const ContactForm = () => {
  // console.log(props);
  // const onViaCallSubmit = ()=>{
  //   console.log("via call");
  // }
  const [name,setName] = useState("Karthik")
  const [email,setEmail] = useState("karthik2002@gmail.com")
  const [text, setText] = useState("Developer")



  // let name = "Karthik";
  // let email = "karthik2002@gmail.com"
  // let text = "Developer"
  const onSubmit =(event)=>{
    event.preventDefault();
    // name = event.target[0].value;
    // email = event.target[1].value;
    // text = event.target[2].value

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);


    // console.log("name",event.target[0].value)
    // console.log("email",event.target[1].value)
    // console.log("text",event.target[2].value)
  }



  return (
    <section className={style.container}>

      <div className={style.contact_form}>

        <div className={style.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button isSecondary={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

        <form onSubmit={onSubmit}>
          <div className={style.form_container}>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" />
          </div>

          <div className={style.form_container}>
            <label htmlFor='email'>E-mail</label>
            <input type="email" name="email" />
          </div>

          <div className={style.form_container}>
            <label htmlFor='text'>Text</label>
            <textarea name="text"  row="8" />
          </div>
          <div className={style.submit_btn}>
          <Button text="SUBMIT" />
          </div>
          
          <div>
            {name + " " + email + " " + text }
          </div>
        </form>
      </div>

      <div className={style.contact_Image}>
        <img src={callerImage} alt='callerImage' />
      </div>
    </section>
  )
}

export default ContactForm