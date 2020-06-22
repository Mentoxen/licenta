import React, { useState } from "react"
import { API, formFieldText } from "../settings"
import FormField from "./formField"
import { useForm } from "react-hook-form"
import { Accordion, AccordionCollapse, Card } from "react-bootstrap"
import axios from "axios"

const RestaurantUpdate = ({ data, city }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [formState, setFormState] = useState({ statusSuccess: false, message: "" })

  const restId = data.id;

  const headersConfig = {
    headers : {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  const onSubmit = async (data, e) => {
    console.log("updated", data);
    const formData = {
      nume: data.nume,
      city: data.city,
      descriere: data.descriere,
      Contact: {
        adresa: data.adresa,
        email: data.email,
        web: data.web
      },
      tags: [
        {
          tag: data.tags
        }
      ],
      user: localStorage.getItem('user')
    }

    // const imageData = new FormData()
    // imageData.append("files", data.banner[0])

    let www = '';
    try {
      // const response = await axios.post(`http://localhost:1337/upload`, imageData);
      // www = response.data[0].id;
      // await axios.post(`http://localhost:1337/${API.RESTAURANTS}`, {
      //   ...formData,
      //   banner: www
      // }, headersConfig).then(function(response) {
      //   e.target.reset()
      //   setFormState({ statusSuccess: true, message: "The message was send!" })
      // })

      await axios.put(`http://localhost:1337/restaurants/${restId}`, formData, headersConfig).then(response => {
        console.log(response)
      }).catch(function(e) {
        setFormState({ statusSuccess: false, message: "Something went wrong, please try again!" })
      })
    } catch (e) {
      setFormState({ statusSuccess: false, message: "Something went wrong, please try again!" })
    }
  }

  const handleChange = (e) => {
    setFormState({ message: "" })
  }

  const { statusSuccess, message } = formState


  const deleteRestaurant = (data, e) => {
    console.log("in");
    try {
      axios.delete(`http://localhost:1337/restaurants/${restId}`, headersConfig).then(response => {
        console.log(response)
      }).catch(function(e) {
        setFormState({ statusSuccess: false, message: "Something went wrong, please try again!" })
      })
    } catch (e) {
      setFormState({ statusSuccess: false, message: "Something went wrong, please try again!" })
    }
  }


  console.log(data)
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
      <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={data.id}>
              {data.nume}
            </Accordion.Toggle>
          <AccordionCollapse eventKey={data.id}>
            <div className="p-5">
              <FormField name="nume" value={data.nume} errors={errors.nume} register={register(formFieldText)} onChange={handleChange} />
              <FormField name="adresa" value={data.Contact.adresa} errors={errors.adresa} register={register(formFieldText)} onChange={handleChange} />
              <FormField name="email" value={data.Contact.email} errors={errors.email} register={register(formFieldText)} onChange={handleChange} />
              <FormField name="web" value={data.Contact.web} errors={errors.web} register={register(formFieldText)} onChange={handleChange} />
              <FormField name="tags" value={data.tags[0].tag} errors={errors.tags} register={register(formFieldText)} onChange={handleChange} />
              <select name="city" ref={register(formFieldText)} onChange={handleChange}>
                {
                  city.length && city.map((city) => {
                    return <option key={city.id} value={city.id}>{city.nume}</option>
                  })
                }
              </select>
              <FormField name="descriere" value={data.descriere} errors={errors.descriere} isTextArea={true} register={register(formFieldText)} onChange={handleChange} />
              <input type="submit" value="Adauga restaurant" className="btn btn-primary btn-small" />
              <span onClick={deleteRestaurant} className="btn btn-danger btn-small" > Sterge restaurant </span>

            </div>
          </AccordionCollapse>
        </Card>
      </Accordion>
    </form>
</>
)
}

export default RestaurantUpdate
