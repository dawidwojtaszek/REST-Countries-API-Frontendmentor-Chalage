import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

const CountryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 150px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
`;
const FlagBox = styled.div`
  max-width: 560px;
  display: flex;

  @media (max-width: 1024px) {
    max-width: 370px;
  }
`;
const Flag = styled.img`
  width: 100%;
  height: auto;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const Name = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 25px;
`;
const PropertyBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;
const PropertyGroup = styled.div`
  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
`;
const Property = styled.p`
  font-size: 1rem;
  padding: 6px 0;
`;
const BordersBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const BorderTitle = styled.p`
  color: ${({ theme }) => theme.colors.color};
  font-weight: 800;
  width: 200px;
  padding: 10px 0;
`;

CountryContainer.FlagBox = FlagBox;
CountryContainer.Flag = Flag;
CountryContainer.InfoBox = InfoBox;
CountryContainer.Name = Name;
CountryContainer.PropertyBox = PropertyBox;
CountryContainer.PropertyGroup = PropertyGroup;
CountryContainer.Property = Property;
CountryContainer.BordersBox = BordersBox;
CountryContainer.BorderTitle = BorderTitle;

export default CountryContainer;
