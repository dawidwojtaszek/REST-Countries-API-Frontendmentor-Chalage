import styled from "styled-components";

const Btn = styled.button`
  padding: 12px 30px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.color};
  text-decoration: none;
  -webkit-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  -moz-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
`;
const Container = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    height: 100px;
  }
`;
Btn.Container = Container;
export default Btn;
