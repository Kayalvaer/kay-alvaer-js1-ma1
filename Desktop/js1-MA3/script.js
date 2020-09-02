const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);


        const jsonCount = result.results;

        resultContainer.innerHTML = "";

        for (let i = 0; i <= jsonCount.lenght; i++) {
            console.log(result);
            if (i === 8) {
                break;
            }

            resultContainer.innerHTML += `<div class="json">${jsonCount[i].name}</div>`;

            resultContainer.innerHTML += `<div class="json">${jsonCount[i].tags}</div>`;

            resultContainer.innerHTML += `<div class="json">${jsonCount[i].ratings}</div>`;

        }
    } catch (error) {
        console.log(error);
        resultContainer.innerHTML = "An error has occurred when calling the API";
    }
};

makeApiCall(url);