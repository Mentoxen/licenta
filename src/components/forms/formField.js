import React from "react"
import { useForm, ErrorMessage } from "react-hook-form";

const FormField = ({errors, isTextArea, register, name, onChange}) => {

  const className= `${errors ? 'error-input' : ''} form-control custom-input`
  console.log("miau", errors)
  return(
    <div className="form-group">
      {!isTextArea && <input onChange={onChange} name={name} placeholder={name} className={className}  ref={register} /> }
      {isTextArea && <textarea name={name} onChange={onChange} placeholder={name} className={className}  ref={register} /> }
      {errors && <p className="error-message">{errors.message}</p>}

    </div>

  )
}

export default FormField
