import React from "react"

import address from '../../images/address.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import url from '../../images/search.png';

const ContactCard = ({data, isUrl = false, isEmail = false, isPhone = false, isAddress = false}) => {

  return (
    <div className="card-contact">
      {isAddress && data && <img src={address} alt="address"/>}
      {isEmail && data && <img src={email} alt="email"/>}
      {isPhone && data && <img src={phone} alt="phone"/>}
      {isUrl && data && <img width={url} src={url} alt="url"/>}
      <span>{isPhone && "0"}{data}</span>
    </div>
  )
}

export default ContactCard
