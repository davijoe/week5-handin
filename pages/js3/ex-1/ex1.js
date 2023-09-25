function getUser() {
    let userId = document.getElementById("userId").value;
    let url = "https://jsonplaceholder.typicode.com/users/" + userId;
    fetch(url)
        .then(res => res.json())
        .then(data => {
        populateTable([data]);
        });
}
  
function getAllUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(res => res.json())
        .then(data => {
        populateTable(data);
        });
}
  
function populateTable(users) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.address.street}</td>
                <td>${user.address.city}</td>
                <td>${user.address.zipcode}</td>
                <td>${user.address.geo.lat}, ${user.address.geo.lng}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
