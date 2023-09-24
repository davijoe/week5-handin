
import { SERVER_URL } from "../js4settings.js"

export function initFindCar() {
  document.getElementById("result").innerText = ""
  document.getElementById("btn").addEventListener("click", findCar)
}


async function findCar() {
    console.log("findCar has been called")
    document.getElementById("error").innerText = ""
    console.log("findCar was here")
    const id = document.getElementById("car-id").value
    console.log("findCar was here2")
    try {
        console.log("findCar was here3")
        const car = await fetch(SERVER_URL + "/" + id)
            console.log("findCar was here4")    
            .then(res => {
            console.log("findCar was here5")
            if (!res.ok) {
                console.log("findCar was here6")
                throw new Error("Car not Found")
                console.log("findCar was here7")
            }
            console.log("findCar was here8")
            return res.json()
            })
            console.log("findCar was here9")
        document.getElementById("result").innerText = JSON.stringify(car, null, 3)
        console.log("findCar was here10")
    } catch(e){
        console.log("findCar was here11")
        document.getElementById("error").innerText = e.message
        console.log("findCar was here12")
    }
}