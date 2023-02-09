import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ theme }) => theme.size.container};
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export default Container;
