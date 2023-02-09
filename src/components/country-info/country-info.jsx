import CountryContainer from "./country-info-style";
import { PageContainer } from "./country-info-style";
import { BackBtn } from "../back-button/back-button";
import { BorderCountries } from "../border-countries/border-countries";

export const CountryInfo = ({ country, border }) => {
  let currency = [];
  let languages = [];

  if (country.hasOwnProperty("currencies")) {
    currency = country.currencies.map((item) => item.name);
  }
  if (country.hasOwnProperty("languages")) {
    languages = country.languages.map((item) => item.name);
  }

  return (
    <PageContainer>
      <BackBtn />
      <CountryContainer>
        <CountryContainer.FlagBox>
          <CountryContainer.Flag src={country.flag} />
        </CountryContainer.FlagBox>
        <CountryContainer.InfoBox>
          <CountryContainer.Name>{country.name}</CountryContainer.Name>
          <CountryContainer.PropertyBox>
            <CountryContainer.PropertyGroup>
              <CountryContainer.Property>
                <b>Native Name: </b>
                {country.nativeName}
              </CountryContainer.Property>
              <CountryContainer.Property>
                <b>Population: </b>
                {country.population.toLocaleString("en-US")}
              </CountryContainer.Property>
              <CountryContainer.Property>
                <b>Region: </b>
                {country.region}
              </CountryContainer.Property>
              <CountryContainer.Property>
                <b>Sub Region: </b>
                {country.subregion}
              </CountryContainer.Property>
              <CountryContainer.Property>
                <b>Capital: </b>
                {country.capital}
              </CountryContainer.Property>
            </CountryContainer.PropertyGroup>
            <CountryContainer.PropertyGroup>
              <CountryContainer.Property>
                <b>Top Level Domain: </b> {country.topLevelDomain.join(",")}
              </CountryContainer.Property>
              <CountryContainer.Property>
                <b>Currencies: </b> {currency.join(", ")}
              </CountryContainer.Property>
              <CountryContainer.Property>
                <b>Languages: </b> {languages.join(", ")}
              </CountryContainer.Property>
            </CountryContainer.PropertyGroup>
          </CountryContainer.PropertyBox>
          <CountryContainer.BordersBox>
            <CountryContainer.BorderTitle>
              Border Countries:
            </CountryContainer.BorderTitle>
            <BorderCountries borders={border} />
          </CountryContainer.BordersBox>
        </CountryContainer.InfoBox>
      </CountryContainer>
    </PageContainer>
  );
};
