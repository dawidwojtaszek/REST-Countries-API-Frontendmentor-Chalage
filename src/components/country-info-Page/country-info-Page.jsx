import { CountryInfo } from "../country-info/country-info";
import { NotFound } from "../404-info/404-info";
import { Container } from "./country-info-Page-style";
export const CountryInfoPage = ({ country, border }) => {
  const notFound = country.status === 404;
  const countryElement = country[0];

  return (
    <div>
      {notFound === true ? (
        <Container>
          <NotFound />
        </Container>
      ) : (
        <CountryInfo country={countryElement} border={border} />
      )}
    </div>
  );
};
