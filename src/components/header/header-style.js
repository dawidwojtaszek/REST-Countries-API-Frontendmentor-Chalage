import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 80px;
  -webkit-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  -moz-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
`;
const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.size.container}) {
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.color};
  cursor: pointer;
  font-weight: 700;
`;
const ThemeBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.color};
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnIcon = styled.div`
  padding: 6px;
`;

HeaderStyled.Container = Container;
HeaderStyled.Logo = Logo;
HeaderStyled.ThemeBtn = ThemeBtn;
HeaderStyled.BtnIcon = BtnIcon;
export default HeaderStyled;
