document.addEventListener("DOMContentLoaded", function() {
    const svgMap = document.querySelector("svg");
    const countryDetailsDiv = document.getElementById("countryDetails");
  
    svgMap.addEventListener("click", function(event) {
      const countryId = event.target.id;
      if (countryId) {
        fetch(`https://countries.plaul.dk/api/countries/${countryId}`)
          .then(response => response.json())
          .then(data => {
            const region = data.region || "Unknown";
  
            if (region === "Europe") {
              // Highlight Europe with blue
              event.target.style.fill = "blue";
  
              // Access nested properties
              const commonName = data.name.common || "Unknown";
              const officialName = data.name.official || "Unknown";
              const area = data.area || "Unknown";
              const languages = data.languages ? Object.values(data.languages).join(', ') : "Unknown";
              const flag = data.flag || "Unknown";
  
              countryDetailsDiv.innerHTML = `
                <img src="${flag}" width="100px" height="100px">
                <h1>${officialName}</h1>
                <h3>${commonName}</h3>
                <p>Area: ${area} sq km</p>
                <p>Languages: ${languages}</p>
              `;
            } else {
              // Highlight other black
              event.target.style.fill = "black";
  
              // Display "Not Europe"
              countryDetailsDiv.innerHTML = "<h1>Not Europe</h1>";
            }
          })
          .catch(error => {
            console.log("Error fetching country data:", error);
          });
      }
    });
  });
  