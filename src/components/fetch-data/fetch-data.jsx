import { useState, useEffect, useContext } from "react";
import { Loading } from "../loading/loading";
import { ShowItemsList } from "../show-items-list/show-items-list";
import CountriesContext from "../../context/countriesContext";

export const FetchCountries = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const { setNewAllCountries, setCurrent } = useContext(CountriesContext);

  useEffect(() => {
    const fetchData = (link) => {
      fetch(link)
        .then((response) => response.json())
        .then((data) => {
          // setData(data);
          setNewAllCountries(data);
          setCurrent(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
          console.log(error);
        });
    };
    fetchData("https://restcountries.com/v2/all");
  }, []);

  return <div>{isLoading ? <Loading /> : <ShowItemsList />}</div>;
};
