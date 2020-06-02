import React from "react"

import address from '../../images/address.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';

const ContactCard = ({data, isEmail = false, isPhone = false, isAddress = false}) => {

  return (
    <div className="card-contact">
      {isAddress && data && <img src={address} alt="address"/>}
      {isEmail && data && <img src={email} alt="email"/>}
      {isPhone && data && <img src={phone} alt="phone"/>}
      <span>{data}</span>
    </div>
  )
}

export default ContactCard
