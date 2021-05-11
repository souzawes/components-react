import './styles.css';

const Item = ({ item, onRemove }) => {
 
  return(
    <div className="container-item">
      <li className="list-group-item list-group-item-light">
        <span>{item.name}</span>    
      </li>
      <button
        className="btn btn-danger" 
        type="button"      
        onClick={() => onRemove(item.id)}
      >
        Remover
      </button>
    </div>
  )
}

export default Item;