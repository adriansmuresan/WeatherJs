class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Chicago';
    this.defaultCountry = 'US';
  }

  getLocationData() {

  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);

  }
}