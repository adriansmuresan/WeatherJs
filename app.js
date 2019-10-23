// Initialize storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object 
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Initialize UI
const ui = new UI();


// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Miami', 'us');

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  // Set location in LocalStorage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');

})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
