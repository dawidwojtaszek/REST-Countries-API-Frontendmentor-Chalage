import styled from "styled-components";

const ShowItemsContainer = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.size.container};
  display: flex;
  justify-content: space-between;
  gap: 39px;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export default ShowItemsContainer;
