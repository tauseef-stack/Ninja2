//api.openweathermap.org/data/2.5/weather?q=London&appid=630b023ef16508ca3e8f2420e0eb2936


async function weatherData() {
     
    city = document.getElementById('city').value;
console.log(city);

    let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=630b023ef16508ca3e8f2420e0eb2936`); //q(query)=city name;

    let data = await res.json();
         appendData(data)
    console.log(data);
    
}

function appendData(d) {
    var div = document.createElement('div');
    let name = document.createElement('p');
    name.textContent = `City Name : ${d.name}`;
    let temp = document.createElement('p');
    temp.textContent = `temp : ${d.main.temp-273.16} C`;
    let pressure = document.createElement('p');
    pressure.textContent = `Pressure : ${d.main.pressure}`;
    let humidity = document.createElement('p');
    humidity.textContent = `Humidity : ${d.main.humidity}`;
    div.append(name, temp, pressure, humidity)
    let head = document.getElementById('container');
    head.append(div);
}


