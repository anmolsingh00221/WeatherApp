

function showResult() {
    let box = document.querySelector(".addDAtainsideBox")
    console.log(box);

    let city_name = document.getElementById("input-box").value
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '589ac95de1mshc12e58062bfadaap1aed78jsn689f6c419aff',
            'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
        }
    };

    const response = fetch(url, options);

    response.then((repsonded) => {
        return repsonded.json()

    }).then((data) => {
        console.log(data)

        let feelLike = data.main.feels_like
        let coord = data.coord
        let weather = data.weather
        let base = data.base
        let main = data.main
        let humidity = data.main.humidity
        let Temp = data.main.temp
        let visi = data.visibility
        let wind = data.wind
        let windspeed = data.wind.speed
        let clouds = data.clouds
        let dt = data.dt
        let sys = data.sys
        let country = data.sys.country
        let timezone = data.timezone
        let id = data.id
        let name = data.name
        let cod = data.cod

        box.innerHTML = `  <div class="box"> <div class="ciyName">City Name : ${city_name} </div>
        <div class="countryName">Country Name : ${country} </div>
        <div class="temp">Temparature : ${Temp} deg Celcius </div>
       
            <div class="huminity">Humidity :  ${humidity}%</div>
            <div class="feelike">FeelLike : ${feelLike} Deg Celcius</div>
        </div>`
        console.log()
        for (const key in data) {
            console.log(key);
        }
    })

}


let submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener("click", showResult)