import React, { useState } from "react"
import {useForm} from "react-hook-form"
import axios  from 'axios';
import FormField from "../forms/formField"
import { API, formFieldEmail, formFieldText } from "../settings"

const ContactForm = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [formState, setFormState] = useState({statusSuccess: false, message: ''});

  const onSubmit = (data, e) => {
    axios.post(`https://licentaiuliu.herokuapp.com/${API.CONTACT_FORM}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      Nume: data.Nume,
      Email: data.Email,
      Mesaj: data.Mesaj
    }).then(function (response) {
      e.target.reset();
      setFormState({statusSuccess: true, message: 'The message was send!'});
    })
    .catch(function (e) {
      setFormState({statusSuccess: false, message: 'Something went wrong, please try again!'});
    });
  }

  const handleChange = (e) => {
    setFormState({message: ''})
  }

  const {statusSuccess, message} = formState;

  return (
    <form
      className="form-contact"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      { message && <div className={`alert alert-${statusSuccess ? 'success' : 'danger'}`}>{message}</div>}

      <FormField name="Nume" errors={errors.Nume} register={register (formFieldText)} onChange={handleChange}/>
      <FormField
        name="Email"
        errors={errors.Email}
        register={register (formFieldEmail)}
        onChange={handleChange}
      />
      <FormField name="Mesaj" isTextArea={true} errors={errors.Mesaj} register={register (formFieldText)} onChange={handleChange} />

      <input type="submit" value="Contacteaza-ne" className="btn  btn-primary" />
    </form>
);
}

export default ContactForm
