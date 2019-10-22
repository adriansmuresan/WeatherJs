// Initialize weather object 
const weather = new Weather('Chicago', 'us');

weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
