import React, { createContext, useContext, useState } from "react"
import FormField from "../forms/formField"
import { formFieldEmail, formFieldPassword } from "../settings"
import { useForm } from "react-hook-form"
import { store } from "./store"
import axios  from 'axios';
import { navigate } from "@reach/router"
import login from '../../images/login.svg';

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [formState, setFormState] = useState({statusSuccess: false, message: ''});
  const { dispatch } = useContext(store);

  const onSubmit = (data, e) => {
    console.log(data)
    axios.post(`http://localhost:1337/auth/local`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        identifier: data.identifier,
        password: data.password
      }).then(function(response) {
        e.target.reset();
        setFormState({statusSuccess: true, message: 'The message was send!'});
        localStorage.setItem('token', response.data.jwt);
        dispatch({type: 'authenticate'});
        navigate('/app/admin');
    }).catch(function(e) {
      console.log(e)
      setFormState({statusSuccess: false, message: 'Something went wrong, please try again!'});
    })
  }

  const handleChange = (e) => {
    setFormState({message: ''})
  }
  const {statusSuccess, message} = formState;

  return(
    <section className="inner-page">
      <div className="container action-page ">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={login}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-6 form-wrapper text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              { message && <div className={`alert alert-${statusSuccess ? 'success' : 'danger'}`}>{message}</div>}

              <FormField
                name="identifier"
                register={register (formFieldEmail)}
                onChange={handleChange}
                errors={errors.identifier}
              />

              <FormField
                name="password"
                register={register (formFieldPassword)}
                onChange={handleChange}
                errors={errors.password}
              />

              <input type="submit" className="btn btn-secondary btn-small" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
