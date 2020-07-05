interface StorageSettings {
    setLocationData(city:string, countryCode:string): void;
    getLocationData(): void;
}

export class Store implements StorageSettings {
    
    private city: string;
    private countryCode: string;
    private defaultCity: string;
    private defaultCountry: string;

    constructor(city: string = '', countryCode: string = '') {
        this.city = city;
        this.countryCode = countryCode;
        this.defaultCity = 'London';
        this.defaultCountry = 'uk';
    }

    setLocationData(city: string, countryCode: string) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city')!;
        }

        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode')!;
        }
        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }
}