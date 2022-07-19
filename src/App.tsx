import countries from './data/country-data.json';
import { transformedCountries } from './mappers';

export const App = () => {
  console.log(transformedCountries(countries));

  return (
    <div>

    </div>
  );
}

