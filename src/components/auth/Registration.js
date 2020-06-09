import React, { Component, useState } from "react"
import axios from 'axios'
import Layout from "../layout"
import registration from "../../images/register.svg"
import FormField from "../forms/formField"
import { formFieldEmail, formFieldPassword, formFieldText } from "../settings"
import { useForm } from "react-hook-form"
import { navigate } from "@reach/router"

// export default class Registration extends Component {
//
//   constructor(props) {
//     super();
//
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//       confirmed: true,
//       blocked: false,
//       role: '',
//       registerErrors: ''
//     }
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(event) {
//     console.log("changed", event)
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//
//   handleSubmit(event) {
//     console.log("submited");
//
//     const {username, email, password, role} = this.state;
//
//     event.preventDefault();
//
//   }
//
//   render() {
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="username"
//             name="username"
//             placeholder="username"
//             value={this.state.username}
//             onChange={this.handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="role"
//             placeholder="Role"
//             value={this.state.role}
//             onChange={this.handleChange}
//             required
//           />
//           <input type="submit" />
//         </form>
//       </div>
//     )
//   }
//
// }

const Registration = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [formState, setFormState] = useState({statusSuccess: false, message: ''});

  const onSubmit = (data, e) => {
    console.log(data)
    const {username, email, password, role} = data;
    axios.post("http://localhost:1337/auth/local/register", {
      username: username,
      email: email,
      password: password,
      role: "5ede486c10239718fa4f3683",
      confirmed: true,
      blocked: false
    }).then(response => {
      console.log("reigster success", response);
      setFormState({statusSuccess: true, message: 'The message was send!'});

    }).catch(error => {
      console.log("error", error.message[0].messages);
      setFormState({statusSuccess: false, message: 'Something went wrong, please try again!'});
    })
  }

  const handleChange = (e) => {
    setFormState({message: ''})
  }
  const {statusSuccess, message} = formState;
  console.log(statusSuccess)

  return (
    <section className="inner-page">
      <div className="container action-page">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={registration}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-6 form-wrapper text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              { message && <div className={`alert alert-${statusSuccess ? 'success' : 'danger'}`}>{message}</div>}

              <FormField
                name="username"
                register={register (formFieldText)}
                onChange={handleChange}
                errors={errors.identifier}
              />

              <FormField
                name="email"
                register={register (formFieldEmail)}
                onChange={handleChange}
                errors={errors.identifier}
              />

              <FormField
                name="password"
                register={register (formFieldPassword)}
                onChange={handleChange}
                errors={errors.identifier}
                isPassword={true}
              />

              <FormField
                name="role"
                register={register (formFieldText)}
                onChange={handleChange}
                errors={errors.identifier}
              />

              <input type="submit" className="btn btn-secondary btn-small" />

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
