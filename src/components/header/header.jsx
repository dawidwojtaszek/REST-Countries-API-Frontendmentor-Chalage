import HeaderStyled from "./header-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as darkIcon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as lightIcon } from "@fortawesome/free-regular-svg-icons";
export const Header = ({ theme, toggle }) => {
  return (
    <HeaderStyled>
      <HeaderStyled.Container>
        <HeaderStyled.Logo to="/">Where in the world?</HeaderStyled.Logo>
        <HeaderStyled.ThemeBtn onClick={() => toggle()}>
          <HeaderStyled.BtnIcon>
            <FontAwesomeIcon
              icon={theme === "light" ? lightIcon : darkIcon}
              size="lg"
            />
          </HeaderStyled.BtnIcon>
          Dark Mode
        </HeaderStyled.ThemeBtn>
      </HeaderStyled.Container>
    </HeaderStyled>
  );
};
