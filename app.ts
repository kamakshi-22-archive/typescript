let message: string = 'Hello, World!';
console.log(message);


let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
