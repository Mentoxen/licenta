import React from "react"
import { useForm, ErrorMessage } from "react-hook-form";

const FormField = ({errors, isTextArea, isPassword, isDefault = true, register, name, onChange, value = ''}) => {
  const className= `${errors ? 'error-input' : ''} form-control custom-input`

  return(
    <div className="form-group">
      {isDefault && !isTextArea && !isPassword && <input onChange={onChange} defaultValue={value} name={name} placeholder={name} className={className}  ref={register} /> }
      {isTextArea && <textarea value={value} name={name} onChange={onChange} placeholder={name} className={className}  ref={register} /> }
      {isPassword && <input type="password" name={name} onChange={onChange} placeholder={name} className={className}  ref={register} /> }
      {errors && <p className="error-message">{errors.message}</p>}
    </div>

  )
}

export default FormField
