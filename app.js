// Initialize weather object 
const weather = new Weather('Chicago', 'us');

// Initialize UI
const ui = new UI();

// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Miami', 'us');

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
