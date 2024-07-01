import React from 'react'
import style from "./ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <div className={style.contact_section}>
        <h1>CONTACT US</h1>
        <p>Their primary purpose is to offer customers efficient and effective technical support, 
            customer service and sales assistance. Contact centers typically include 
            one or more call centers but may also include other types of customer contact channels, 
            including emails, webchats and social media interactions.
        </p>
    </div>
  )
}

export default ContactHeader