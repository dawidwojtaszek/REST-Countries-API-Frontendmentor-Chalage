import ShowItemsContainer from "./show-items-list-style";
import { ItemCard } from "../item-card/item-card";
import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";

export const ShowItemsList = () => {
  const { currentCountriesList } = useContext(CountriesContext);
  return (
    <ShowItemsContainer role="main">
      {currentCountriesList.map((item, index) => (
        <ItemCard
          name={item.name}
          flag={item.flag}
          key={index}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </ShowItemsContainer>
  );
};
