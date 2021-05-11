import { useState } from 'react';

import Button from '../Button';
import Item from '../Item';

import './styles.css';


const Card = () => {    
    
    const [ item, setItem ] = useState(0);

    function incrementItem() {
        setItem(item + 1);    
    }

    function decrementItem() {
        if (item === 0) {
            setItem(0);
        }else {
            setItem(item - 1);
        }
    }

    function addItem(index) {
        return <Item>Item {index}</Item>;
    }

    return(
        <div className="card">
            <div className="card-header">
                Adicione ou remova os itens da lista abaixo
            </div>
            <div className="card-body">
                <div className="container-buttons">
                    <Button className="btn btn-success" onClick={incrementItem}>
                        Adiciona um item
                    </Button>

                    <Button className="btn btn-danger" onClick={decrementItem}>
                        Remove um item
                    </Button>

                    <p className="card-text"> Existem <strong>{item}</strong> itens na lista: </p>
                </div>
                <div className="container-list">
                    <ul>        
                       {(item !== 0) ? addItem(item) : <Item>Lista vazia</Item>}
                    </ul>                
                </div>
            </div>
        </div>
    )
}

export default Card;