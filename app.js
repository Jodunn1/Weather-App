const searchBar = document.getElementById("name");
const city = document.querySelector(".name figcaption");
const cityFlag = document.querySelector(".name img");
const temp = document.querySelector(".temperature");
const weatherImg = document.querySelector(".temperature img");
const degrees = document.querySelector(".degrees");
const description = document.querySelector(".description");
const clouds = document.querySelector("#clouds");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (searchBar.value) {
        searchWeather();
    }
})


const id = '962edcd6298a07c7b62a2b01e3a18d02';
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${id}&units=metric`

const searchWeather = () => {
    fetch(url + '&q=' + searchBar.value)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        updateCity(data)
    })
}

const updateCity = (data) => {
    city.innerText = data.name
    cityFlag.src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`
}






