export class UI {
    private location: any;
    private desc: any;
    private str: any;
    private humidity: any;
    private wind: any;
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.str = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(weather:any) {
        this.location.textContent = `${weather.name}/${weather.sys.country}`;
        this.desc.textContent = weather.weather[0]['description'];
        this.str.textContent = `${weather.main.temp}ºC`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s, ${weather.wind.deg}º`;
    }
}