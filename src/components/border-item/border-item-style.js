import styled from "styled-components";
import { Link } from "react-router-dom";

const BorderLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.color};
  -webkit-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  -moz-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  border-radius: 5px;
  height: 30px;
  padding: 10px 30px;
  margin-left: 6px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 7px;
`;
export default BorderLink;
