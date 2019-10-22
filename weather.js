class Weather {
  constructor(city, zip) {
    this.apiKey = 'e27f465a672182232f7bb237e4eb9ea4';
    this.city = city;
    this.zip = zip;
  }

  // Fetch weather from API --> I used (https://openweathermap.org/api)
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.zip}&APPID=${this.apiKey}`);
  
    const responseData = await response.json();
  
    return responseData;
  }

  // Change Location
  changeLocation(city, zipCode) {
    this.city = city;
    this.zip = zip;
  }
}
