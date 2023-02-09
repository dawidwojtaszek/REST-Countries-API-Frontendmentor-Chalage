import { BorderItem } from "../border-item/border-item";
import BordersBox from "./border-countries-style";
export const BorderCountries = ({ borders }) => {
  return (
    <BordersBox>
      {borders !== null
        ? borders.map((item, index) => (
            <BorderItem key={index} name={item.name} />
          ))
        : ""}
    </BordersBox>
  );
};
