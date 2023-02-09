import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 3rem;
  font-weight: 800;
`;
