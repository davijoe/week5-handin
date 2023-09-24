import { SERVER_URL } from "../js4settings.js"

export async function initAllCars() {
    console.log("initAllCars");
  
    const cars = await getCars();
    
    const tableBody = document.getElementById("car-rows");
    tableBody.innerHTML = "";
  
    const rows = cars.map(car => `
        <tr>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.pricePrDay}</td>
        </tr>
    `).join("");
  
    tableBody.innerHTML = rows;
}

async function getCars() {
    const cars = await fetch(SERVER_URL).then(res => res.json());
    return cars;
}