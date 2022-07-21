import { CountryList } from './components/CountryList';
import countries from './data/country-data.json';
import { transformCountries } from './mappers';
import { ICountry } from './types';

export const App = () => {
  const transformedCountries: ICountry[] = transformCountries(countries)

  return (
    <div className='container'>
      <h2 className='m-3'>Country List</h2>
      <CountryList countries={transformedCountries} />
    </div>
  );
}

