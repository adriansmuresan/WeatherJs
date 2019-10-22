// Initialize weather object 
const weather = new Weather('Chicago', '60659');

weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));