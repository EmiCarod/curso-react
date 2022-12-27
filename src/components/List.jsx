import Item from "./Item";

const List = function ({ list }) {
    return list.map(({ name, marca, talle }) => (
        <Item key={name} name={name} marca={marca} talle={talle} />
    ));
};

export default List;