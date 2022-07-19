import { ICountry } from "../types"

interface IProps {
    countries: ICountry[]
}

export const CountryList = ({ countries }: IProps) => {
    return (
        <ul>
            {countries.map(country => {
                return <li>{country.name}</li>
            })}
        </ul>
    )
}
