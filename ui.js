class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.temp= document.getElementById('w-temp');
    this.wind = document.getElementById('w-wind');
    this.icon=document.getElementById('w-icon');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`); 
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.temperature_string;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} C`;
    this.temp.textContent = `Temp: ${weather.main.temp}`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`
    ;
  }
}