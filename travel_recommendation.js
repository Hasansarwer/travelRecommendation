const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');


fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
.then(response => response.json())
.then(data => {
    console.log(Object.keys(data));
})

function searchDestination(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML ='';

    fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
    .then(response => response.json())
    .then(data => {
        const key = Object.keys(data).filter(item => item.includes(input));
        const destinations = data[key];
        console.log(destinations);

        destinations.forEach(destination => {
            console.log(destination);
            if(key=='countries'){
                destination = destination.cities[0];
            }
            searchResults.innerHTML += `
            <div class="card">
                <img src="${destination.image}" alt="Destination Image">
                <div class="card-content">
                    <h2>${destination.name}</h2>
                    <p>${destination.description}</p>
                    <button>visit</button>
                    </div>`
        })

    })
}

searchBtn.addEventListener('click', searchDestination);