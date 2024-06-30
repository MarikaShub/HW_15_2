let cities = ['Ставрополь', 'Михайловск', 'Краснодар', 'Ростов'];
let temperaturesInCities = [];
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру в городе ${cities[i]} в Цельсиях`);
    temperaturesInCities.push(Number(temperature));
}


for (let i=0; i<temperaturesInCities.length; i++) {
    const temperatureList = document.querySelector('.temperature');
const temperatureItem = document.createElement('li');
temperatureItem.textContent = `Температура в городe ${cities[i]}: ${temperaturesInCities[i]} °С`;
temperatureList.append(temperatureItem);
}


let higestTemperature = Math.max(...temperaturesInCities);

let maxTemperature = document.querySelector('.maxtemperature');
maxTemperature.textContent = `Максимальная температура: ${higestTemperature} °С`;

let lowestTemperature = Math.min(...temperaturesInCities);
let minTemperature = document.querySelector('.mintemperature');
minTemperature.textContent = `Минимальная температура: ${lowestTemperature} °С`;
