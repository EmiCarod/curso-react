import { Link } from "react-router-dom";

const Item = function ({ name, marca, talle }) {
    return (
    <li>
        <Link to={'${name}'}>
        <strong>{name}</strong>
        </Link>
        <small>- {marca}</small>
        <em>Talle: {talle}</em>
    </li>
    );
  };
  
  export default Item;