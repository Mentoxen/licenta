import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import FormField from "../forms/formField"
import { API, formFieldText } from "../settings"
import axios from "axios"
import useRestaurant from "../hooks/useRestaurant"
import { Tab, Tabs } from "react-bootstrap"
import RestaurantUpdate from "./RestraurantUpdate"

const RestaurantForm = () => {

  const { register, handleSubmit, watch, errors } = useForm()
  const [formState, setFormState] = useState({ statusSuccess: false, message: "" })
  const [cities, setCities] = useState([])
  const {currentRestaurant, setCurrentRestaurant} = useRestaurant();
  const headersConfig = {
    headers : {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:1337/oras`).then(response => {
      const res = response.data
      setCities(res)
    }).catch(function(e) {
      setFormState({ statusSuccess: false, message: "Something went wrong, please try again!" })
    })

    axios.get(`http://localhost:1337/users/${localStorage.getItem('user')}`, headersConfig).then(response => {
      setCurrentRestaurant(response.data.restaurants);
    }).catch(function(e) {
      setFormState({ statusSuccess: false, message: "Something went wrong, please try again!" })
    })
  }, [])


  const onSubmit = async (data, e) => {
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

    const imageData = new FormData()
    imageData.append("files", data.banner[0])

    let www = '';
    try {
      const response = await axios.post(`http://localhost:1337/upload`, imageData);
      www = response.data[0].id;
      await axios.post(`http://localhost:1337/${API.RESTAURANTS}`, {
        ...formData,
        banner: www
      }, headersConfig).then(function(response) {
        e.target.reset()
        setFormState({ statusSuccess: true, message: "The message was send!" })
      })

      await axios.get(`http://localhost:1337/users/${localStorage.getItem('user')}`, headersConfig).then(response => {
        setCurrentRestaurant(response.data.restaurants);
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

  return (
    <Tabs defaultActiveKey="addRest" className="mt-5" id="uncontrolled-tab-example1">
      <Tab eventKey="addRest" title="Adauga restaurant">
        <form
          className="form-contact"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <h2 className="card-title mb-3 mt-5">Adauga un restaurant</h2>
          {message && <div className={`alert alert-${statusSuccess ? "success" : "danger"}`}>{message}</div>}

          <FormField name="nume" errors={errors.nume} register={register(formFieldText)} onChange={handleChange} />
          <FormField name="adresa" errors={errors.adresa} register={register(formFieldText)} onChange={handleChange} />
          <FormField name="email" errors={errors.email} register={register(formFieldText)} onChange={handleChange} />
          <FormField name="web" errors={errors.web} register={register(formFieldText)} onChange={handleChange} />
          <FormField name="tags" errors={errors.tags} register={register(formFieldText)} onChange={handleChange} />
          <select name="city" ref={register(formFieldText)} onChange={handleChange}>
            {
              cities.length && cities.map((city) => {
                return <option key={city.id} value={city.id}>{city.nume}</option>
              })
            }
          </select>
          <input type="file" name="banner" ref={register(formFieldText)} onChange={handleChange} />
          <FormField name="descriere" errors={errors.descriere} isTextArea={true} register={register(formFieldText)} onChange={handleChange} />

          <input type="submit" value="Adauga restaurant" className="btn btn-primary" />
        </form>
      </Tab>
      <Tab eventKey="veziRest" title="Vezi restaurante">

        {currentRestaurant.length && currentRestaurant.map((restaurant) => {
          return <RestaurantUpdate data={restaurant} city={cities} />
        })}
      </Tab>
    </Tabs>
  )
}

export default RestaurantForm

