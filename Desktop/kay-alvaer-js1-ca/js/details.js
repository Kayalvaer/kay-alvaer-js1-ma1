// get the querystring
const querystring = document.location.search;

// create an object that will allows us to access all the querystring parameters
//get parameters out of querystring
const parameters = new URLSearchParams(querystring);

// get the id parameter from the querystring
const alpha2Code = parameters.get("alpha2Code");
const region = parameters.get("region");

if (alpha2Code === null) {
    document.location.href = "index.html";
}

//console.log(alpha2Code);




async function getCountry() {
    //const url = `https://restcountries.eu/rest/v2/alpha/%7Balpha3Code%7D`;
    const url = "https://restcountries.eu/rest/v2/alpha/" + alpha2Code;


    const infoContainer = document.querySelector(".detail");

    try {
        const response = await fetch(url);
        const json = await response.json();



        //createHtml(details);
        infoContainer.innerHTML = `<a class="card" href="details.html?alpha2Code=${json.alpha2Code}">
                                <div class="details"><h5>${json.name}</h5>
                                <img src="${json.flag}" alt="${json.name}"/>
                                    <p>Capital: ${json.capital}</p>
                                    <p>Currency: ${json.currencies}</p>
                                </div></a>`;

        console.log(json);

    } catch (error) {
        infoContainer.innerHTML = `<div class="error-message">An error, check your code</div>`;
    }

}

getCountry();

console.log(alpha2Code);