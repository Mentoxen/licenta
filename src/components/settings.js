export const heroSliderSettings = {
  dots: true,
  arrows: false,
  speed: 700,
  autoplay: true
}

export const articleSliderSettings = {
  dots: true,
  arrows: true,
  speed: 800,
  autoplay: false,
  slidesToShow: 3
}

export const formFieldText = {
  required: {
    value: true,
    message: 'This filed is required'
  }
}

export const formFieldEmail = {
  required: {
    value: true,
    message: 'This filed is required'
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'The email field has an invalid format'
  }
}


//APIS
export const API = {
  CONTACT_FORM : 'contacts'
}



//routes

export const ORASE = 'orase/'