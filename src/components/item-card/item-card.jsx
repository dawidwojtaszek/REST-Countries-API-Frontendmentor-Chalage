import CardWrap from "./item-card-style";
export const ItemCard = ({ name, flag, population, region, capital }) => {
  const link = name.split(" ");
  let correctLink = "";
  link.length > 1
    ? (correctLink = link.join("-"))
    : (correctLink = link.join(""));

  return (
    <CardWrap>
      <CardWrap.Flag src={flag} alt={`${name} flag`} />
      <CardWrap.Info>
        <CardWrap.Name to={`/${correctLink}`}>{name}</CardWrap.Name>

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
