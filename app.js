const display = document.querySelector('.Display')
let button = document.querySelector('button')

button.addEventListener("click", function () {
   var City = document.querySelector("#CityName > input");
   var i;
   var name = City.value
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ea0596ed53d44ccbc17185709f8f0700`)
      .then(res => res.json())
      .then(data => {
         const Temp = data.main.temp.toFixed(0)
         display.innerHTML = `
      <div class="City">
         <h1 class="City">
              ${data.name}
         </h1>
      </div>
      <div class="WeatherStatus">
         <img src="./images/${data.weather[0].main + "." + "png"}">
         <h2 class="Tempercher">
         ${Temp - 273 + "°C"} 
         </h2>
      </div>`})
})
