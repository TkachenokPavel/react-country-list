export type BadgeLabel = 'area' | 'population';

export interface ICountry {
    name: string,
    capital: string,
    population: number,
    flag: string,
    area: number,
    region: string
}

export interface ICountryApi {
    flags: ICountryFlagsApi,
    name: ICountryNameApi,
    capital: string[],
    region: string
    area: number,
    population: number,
}

interface ICountryFlagsApi {
    png: string,
    svg: string,
}

interface ICountryNameApi {
    common: string,
    official: string,
    nativeName: {
        [key: string]: {
            official: string,
            common: string
        } | undefined
    }
}

export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Light = 'light',
    Dark = 'dark',
}