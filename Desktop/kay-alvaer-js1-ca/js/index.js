const url = "https://restcountries.eu/rest/v2/region/africa";
const infoContainer = document.querySelector(".details");



async function getCountry() {

    try {

        const infoCountry = await fetch(url);
        const json = await infoCountry.json();

        const details = json;

        //details.forEach(function (country) {

        //})

        infoContainer.innerHTML = "";

        for (i = 0; i < details.length; i++) {
            if (i === 20) {
                break;
            }
            infoContainer.innerHTML += `<a class="card" href="details.html?alpha2Code=${details[i].alpha2Code}">
                                                      <div class="details"><h5>${details[i].name}</h5>
                                                      <img src="${details[i].flag}" 
                                                      alt="${details[i].name}"/>
                                                   <p>Capital city: ${details[i].capital}</p>
                                                   <p>Country size: ${details[i].area}</p>
                                                  </div>
                                             </a>`;

        }

    } catch (error) {
        console.log("error occurred when calling the api code");
        infoContainer.innerHTML = `<p class="error">An error occurred when calling the API code </p>`;
    }


}


getCountry();