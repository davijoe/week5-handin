import {SERVER_URL} from "../js4settings.js"
import {makeOptions} from "../js4utils.js"

export function initAddCar(){
  addCar()
}

async function addCar(){
  //Get Cars from form
  const car = {
    brand :"brand",
    model : "model",
    pricePrDay :999,
    bestDiscount :999
  }

  const options = makeOptions("POST",car)

  const newCar = await fetch(SERVER_URL,options)
    .then(res=>res.json())
  console.log(newCar)
}


