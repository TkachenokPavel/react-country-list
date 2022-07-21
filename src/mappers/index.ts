import { ICountry, ICountryApi } from "../types";

export const transformCountries = (countriesData: ICountryApi[]) => {
    return countriesData.map((country): ICountry => ({
        name: country.name.common,
        capital: country.capital[0],
        flag: country.flags.svg,
        population: country.population,
        area: country.area,
        region: country.region,
    }));
}