import Item from "../Item";


const List = ({ list, onRemove }) => (
    <ul>
        {list.map((item) => (
            <Item key={item.id} item={item} onRemove={onRemove} />
        ))}
    </ul>
);

export default List;