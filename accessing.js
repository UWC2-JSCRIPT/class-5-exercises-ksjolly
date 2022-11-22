// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const seattle = document.getElementById('weather-head');
seattle.innerText = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"

const suns = document.querySelectorAll('li.sun');
suns.forEach(sun => sun.style.color = 'orange');
// Change the class of the second <li> from to "sun" to "cloudy"

suns[1].className = 'cloudy';