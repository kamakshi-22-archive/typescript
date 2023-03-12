var message = 'Hello, World!';
console.log(message);
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
// json may come from a third-party API
var json = "{\"latitude\": 10.11, \"longitude\":12.12}";
// parse JSON to find location
var currentLocation = JSON.parse(json);
console.log(currentLocation);
