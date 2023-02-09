import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CountryInfoPage } from "../components/country-info-Page/country-info-Page";
import { Loading } from "../components/loading/loading";
import { SEO } from "../components/SEO/SEO";

export const DetailsPage = () => {
  const { countryName } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  const [border, setBorder] = useState([]);

  useEffect(() => {
    async function fetchCountry(countryName) {
      const response = await fetch(
        `https://restcountries.com/v2/name/${countryName}?fullText=true`
      );
      const countryData = await response.json();
      return countryData;
    }

    async function fetchBorders(countryData) {
      if (countryData[0].hasOwnProperty("borders")) {
        const borderCode = countryData[0].borders.join(",");
        const borderResponse = await fetch(
          `https://restcountries.com/v2/alpha?codes=${borderCode}`
        );
        const borderCountries = await borderResponse.json();
        return borderCountries;
      } else {
        return null;
      }
    }
    async function fetchData(countryName) {
      let countryData = [];
      let countryBorders = [];

      try {
        countryData = await fetchCountry(countryName);
        setCountry(countryData);
        countryBorders = await fetchBorders(countryData);
        setBorder(countryBorders);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }

    fetchData(countryName);
  }, [countryName]);

  return (
    <>
      <SEO title={countryName} />
      {isLoading ? (
        <Loading />
      ) : (
        <CountryInfoPage country={country} border={border} />
      )}
    </>
  );
};
