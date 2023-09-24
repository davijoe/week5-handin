
import { SERVER_URL } from "../js4settings.js"

export function initFindCar() {
  document.getElementById("result").innerText = ""
  document.getElementById("btn").addEventListener("click", findCar)
}


async function findCar() {
    document.getElementById("error").innerText = "";
    const id = document.getElementById("car-id").value;
    try {
        const response = await fetch(SERVER_URL + "/" + id);
        if (!response.ok) {
            throw new Error("Car not Found");
        }
        const car = await response.json();

        
    } catch(e) {
        document.getElementById("error").innerText = e.message;
    }
}
