import Section from "./search-section-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";

export const SearchSection = () => {
  const { allCountries, setCurrent } = useContext(CountriesContext);
  const handleInput = (e) => {
    const newList = allCountries.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );
    setCurrent(newList);
  };
  const filterByRegion = (e) => {
    const newList = allCountries.filter(
      (item) => item.region === e.target.value
    );
    setCurrent(newList);
  };
  return (
    <Section>
      <Section.SearchBar>
        <Section.SearchIconBox>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Section.SearchIconBox>
        <Section.SearchInput
          placeholder="Search for a country..."
          onChange={handleInput}
          role="search"
        />
      </Section.SearchBar>

      <Section.Select onChange={filterByRegion} aria-label="region">
        <Section.Option value="none" hidden role="Filter by region">
          Filter by Region
        </Section.Option>
        <Section.Option role="africa">Africa</Section.Option>
        <Section.Option role="americas">Americas</Section.Option>
        <Section.Option role="asia">Asia</Section.Option>
        <Section.Option role="europe">Europe</Section.Option>
        <Section.Option role="oceania">Oceania</Section.Option>
      </Section.Select>
    </Section>
  );
};
