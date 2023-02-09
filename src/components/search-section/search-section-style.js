import styled from "styled-components";

const Section = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & :-ms-expand {
    display: none;
  }
`;

const SearchBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 480px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 7px;
  padding: 20px;
  -webkit-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  -moz-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  @media (max-width: 900px) {
    width: 85%;
  }
`;
const SearchInput = styled.input`
  color: ${({ theme }) => theme.colors.color};
  background-color: transparent;
  border: none;
  width: 100%;
  height: 80%;
  padding: 15px;
`;
const SearchIconBox = styled.div`
  padding-right: 20px;
`;
const Select = styled.select`
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 7px;
  width: 200px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  -webkit-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  -moz-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;
const Option = styled.option`
  color: ${({ theme }) => theme.colors.color};
  height: 20px;
`;
Section.SearchBar = SearchBar;
Section.SearchInput = SearchInput;
Section.SearchIconBox = SearchIconBox;
Section.Select = Select;
Section.Option = Option;

export default Section;
