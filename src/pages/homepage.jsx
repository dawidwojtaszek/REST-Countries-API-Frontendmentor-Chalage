import { FetchCountries } from "../components/fetch-data/fetch-data";
import { SearchSection } from "../components/search-section/search-secition";
import { SEO } from "../components/SEO/SEO";
export const Homepage = () => {
  return (
    <>
      <SEO title="Where in the world?" />
      <SearchSection />
      <FetchCountries />
    </>
  );
};
