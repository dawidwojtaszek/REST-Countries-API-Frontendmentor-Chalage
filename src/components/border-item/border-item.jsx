import BorderLink from "./border-item-style";
export const BorderItem = ({ name }) => {
  return <BorderLink to={`/${name}`}>{name}</BorderLink>;
};
