const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');

function searchDestination(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML ='';

    fetch('/travel_recommendation_api.json')
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
                <img src="${destination.imageUrl}" alt="Destination Image">
                <div class="card-content">
                    <h2>${destination.name}</h2>
                    <p>${destination.description}</p>
                    <button>visit</button>
                    </div>`
        })

    })
}

searchBtn.addEventListener('click', searchDestination);

function clearSearch(){
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

clearBtn.addEventListener('click', clearSearch);