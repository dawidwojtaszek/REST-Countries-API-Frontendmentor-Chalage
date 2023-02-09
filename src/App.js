import { Header } from "./components/header/header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useState, useEffect } from "react";
import { GlobalStyles } from "./styles/global";
import { Homepage } from "./pages/homepage";
import { DetailsPage } from "./pages/details";
import { CountriesProvider } from "./context/countriesContext";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    let themeStorage = localStorage.getItem("theme");
    themeStorage !== "light" && themeStorage !== "dark"
      ? setTheme("light")
      : setTheme(themeStorage);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <HelmetProvider>
        <GlobalStyles />
        <CountriesProvider>
          <>
            <Header theme={theme} toggle={themeToggle} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/:countryName" element={<DetailsPage />} />
            </Routes>
          </>
        </CountriesProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
