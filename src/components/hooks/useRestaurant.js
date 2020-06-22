import React, {useState} from "react"

const useRestaurant = () => {

  const [currentRestaurant, setCurrentRestaurant] = useState([]);

  return {
    currentRestaurant,
    setCurrentRestaurant
  }

}

export default useRestaurant;
