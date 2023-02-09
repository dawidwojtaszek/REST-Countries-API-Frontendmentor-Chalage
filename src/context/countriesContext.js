import { createContext, useState } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountriesList, setCurrentList] = useState([]);

  const setNewAllCountries = (countriesList) => {
    setAllCountries(countriesList);
  };
  const setCurrent = (list) => {
    setCurrentList(list);
  };
  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        setNewAllCountries,
        currentCountriesList,
        setCurrent,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
