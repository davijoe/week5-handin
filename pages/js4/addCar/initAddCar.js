import {SERVER_URL} from "../js4settings.js"
import {makeOptions} from "../js4utils.js"

export function initAddCar(){
  addCar()
}


async function addCar(){
  //Get Cars from form
  const car = {
    brand :"djsjfd",
    model : "sjdljdfskl",
    pricePrDay :100,
    bestDiscount :25
  }

  const options = makeOptions("POST",car)

  const newCar = await fetch(SERVER_URL,options)
    .then(res=>res.json())
  console.log(newCar)
}


