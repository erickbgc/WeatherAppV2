import * as _ from 'lodash';
import './style.sass';
import { Weather } from './Weather';
import { UI } from './Ui';
import { Store } from './Store';

// Instantiating classes
const ui = new UI();
const storage = new Store();
const { city, countryCode } = storage.getLocationData();
const weather = new Weather(city, countryCode);

// Reload and fetching function
function init() {
    document.addEventListener('DOMContentLoaded', () => {
        return fetchWeather();
    });
}
// Calling the Init function
init();

// fetching data from the HTML
document.getElementById('w-change-btn')?.addEventListener('click', (e) => {
    const city = (<HTMLInputElement>document.getElementById('city')).value;
    const countryCode = (<HTMLInputElement>document.getElementById('countryCode')).value;
    // Updating the weather object
    weather.changeLocation(city, countryCode);
    // Setting in the localStorage
    storage.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});

async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
}