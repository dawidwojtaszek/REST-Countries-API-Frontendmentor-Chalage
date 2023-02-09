import styled from "styled-components";
import { Link } from "react-router-dom";
const CardWrap = styled.div`
  width: 265px;
  height: 335px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 7px;
  overflow: hidden;
  -webkit-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  -moz-box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
`;

const Flag = styled.img`
  height: 160px;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;
const Name = styled(Link)`
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.color};
  text-decoration: none;
  margin-bottom: 15px;
`;
const StatBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`;
const StatName = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  padding-right: 5px;
`;
const Stat = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
`;
CardWrap.Flag = Flag;
CardWrap.Info = Info;
CardWrap.StatBox = StatBox;
CardWrap.Name = Name;
CardWrap.StatName = StatName;
CardWrap.Stat = Stat;
export default CardWrap;
