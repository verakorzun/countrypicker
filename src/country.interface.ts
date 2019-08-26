
export interface ICountry {
    name: {
        common: string;
        official: string;
        native?: {
            [key: string]: {
                official: string;
                common: string;
            }
        }
    };
    tld: [string];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    currency: [string];
    callingCode: [number];
    capital: string;
    altSpellings: [string];
    region: string;
    subregion: string;
    languages: {
        bar: string
    };
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: [number]; //lattitude-longitude
    demonym: string; //population
    landlocked: boolean; //blocked
    borders: [string];
    area: number;
}

