import {SERVER_URL} from "../js4settings.js"
import {makeOptions} from "../js4utils.js"

export function initAddCar() {
    document.getElementById("add-car-btn").addEventListener("click", addCar);
}

async function addCar() {
    const brand = document.getElementById("car-brand").value;
    const model = document.getElementById("car-model").value;
    const car = {
        brand: brand,
        model: model,
    };
  
    const options = makeOptions("POST", car);
    const response = await fetch(SERVER_URL, options);
    
    if (response.status === 400) {
        document.getElementById("add-car-success").innerText = "";
        document.getElementById("error").innerText = "This car already exists in the Database.";
        document.getElementById("error").style.color = "red";
        return;
    }
   
    const newCar = await response.json();
    console.log(newCar);
    document.getElementById("error").innerText = "";
    document.getElementById("add-car-success").innerText = `You successfully added the car. It got ID: ${newCar.id}`;
    document.getElementById("car-brand").value = "";
    document.getElementById("car-model").value = "";
}