import { ICountry } from "../types";
import { Badge } from './Badge';
import { Color } from '../types'

interface IProps {
    country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
    return (
        <li className="list-group-item d-flex row align-items-center">
            <img className="col-1" src={country.flag} alt="" />
            <span className="col-2">{country.name}</span>
            <span className="col-2">{country.capital}</span>
            <span className="col-3">{country.region}</span>
            <Badge color={Color.Primary} value={country.area} label='area' />
            <Badge color={Color.Secondary} value={country.population} label='population' />
        </li>
    )
}
