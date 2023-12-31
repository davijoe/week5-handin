import { SERVER_URL } from "../js4settings.js"

export function initFindCar() {
    document.getElementById("searched-car-row").innerText = ""
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

        const tableBody = document.getElementById("searched-car-row");
        tableBody.innerHTML = ""; // Clear previous row

        const row = `
          <tr>
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.pricePrDay}</td>
          </tr>
        `;

        tableBody.innerHTML = row;

    } catch(e) {
        document.getElementById("error").innerText = e.message;
    }
}
