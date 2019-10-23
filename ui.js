// Initialize weather object 
const weather = new Weather('Chicago', 'us');

// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Miami', 'us');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
