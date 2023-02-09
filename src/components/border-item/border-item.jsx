import BorderLink from "./border-item-style";
export const BorderItem = ({ name }) => {
  const link = name.split(" ");
  let correctLink = "";
  link.length > 1
    ? (correctLink = link.join("-"))
    : (correctLink = link.join(""));

  return <BorderLink to={`/${correctLink}`}>{name}</BorderLink>;
};
