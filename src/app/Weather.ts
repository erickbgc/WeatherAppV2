export class Weather {
    private city: string;
    private countryCode: string;
    private apikey: string;
    constructor(city: string, countryCode: string) {
        this.apikey = '2f38a7ba0a41a0b41623efb848d654b1';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city:string, countryCode:string) {
        this.city = city;
        this.countryCode = countryCode;
    }
}