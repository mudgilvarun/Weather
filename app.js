const apiKey = "ce0c9c39aefeb793372071aa0be6ced9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbtn = document.querySelector(".searchbox button");
const searchinput = document.querySelector(".searchbox input");



async function checkWeather(value){
    const response =await fetch(apiUrl + value + `&appid=${apiKey}`);
    var data =await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector("#humidity_amount").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind_speed").innerHTML = data.wind.speed + " Km/h";
}

searchbtn.addEventListener("click" ,() =>{
    let value = searchinput.value;
    checkWeather(value);
})