class Weather {
  constructor(city, state) {
    this.apiKey = '28323c3b605db69557c164a149c3094b';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    console.log(responseData);
    console.log(responseData.name);
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
