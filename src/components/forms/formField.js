import React from "react"
import { useForm, ErrorMessage } from "react-hook-form";

const FormField = ({errors, isTextArea, isPassword, isDefault = true, register, name, onChange}) => {
  const className= `${errors ? 'error-input' : ''} form-control custom-input`

  return(
    <div className="form-group">
      {isDefault && !isPassword && <input onChange={onChange} name={name} placeholder={name} className={className}  ref={register} /> }
      {isTextArea && <textarea name={name} onChange={onChange} placeholder={name} className={className}  ref={register} /> }
      {isPassword && <input type="password" name={name} onChange={onChange} placeholder={name} className={className}  ref={register} /> }
      {errors && <p className="error-message">{errors.message}</p>}
    </div>

  )
}

export default FormField
