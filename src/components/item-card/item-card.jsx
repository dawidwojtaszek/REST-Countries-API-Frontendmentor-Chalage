import CardWrap from "./item-card-style";
import { Link } from "react-router-dom";
export const ItemCard = ({ name, flag, population, region, capital }) => {
  return (
    <CardWrap>
      <CardWrap.Flag src={flag} />
      <CardWrap.Info>
        <CardWrap.Name to={`/${name}`}>{name}</CardWrap.Name>

        <CardWrap.StatBox>
          <CardWrap.StatName>Population: </CardWrap.StatName>
          <CardWrap.Stat>{population.toLocaleString("en-US")}</CardWrap.Stat>
        </CardWrap.StatBox>
        <CardWrap.StatBox>
          <CardWrap.StatName>Region: </CardWrap.StatName>
          <CardWrap.Stat>{region}</CardWrap.Stat>
        </CardWrap.StatBox>
        <CardWrap.StatBox>
          <CardWrap.StatName>Capital: </CardWrap.StatName>
          <CardWrap.Stat>{capital}</CardWrap.Stat>
        </CardWrap.StatBox>
      </CardWrap.Info>
    </CardWrap>
  );
};
