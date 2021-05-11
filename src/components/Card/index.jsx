import React, { useState } from 'react';

import Button from '../Button';
import List from '../List';

import './styles.css';

const Card = () => {    
    
    const [ listItems, setListItems ] = useState([]);
    const [ item, setItem ] = useState('');    

    function onChange(event) {
        setItem(event.target.value);
        // console.log(item);
    }

    function incrementList() {
        // Novo objeto dinâmico,
        if(item === '') {
            // console.log('empty input');
            return
        }
        const newItem = {
            name: `${item}`,
            id: listItems.length + 1,
        }
        
        // Adiciona no final da lista
        setListItems(listItems => [...listItems, newItem]);
    }
 
    function decrementList(id) {
        const newList = listItems.filter((item) => item.id !== id);

        setListItems(newList);
    }
    
    return(
        <div className="card">
            <div className="card-header">
                Adicione ou remova os itens da lista abaixo
            </div>
            <div className="card-body">
                <div className="container-buttons">
                    <input 
                        className="form-control form-control-lg" 
                        type="text" 
                        placeholder="Digite o item a ser inserido" 
                        aria-label=".form-control-lg example"                        
                        onChange={onChange}
                    />                    
                    <Button className="btn btn-success" onClick={incrementList}>
                        Adicionar item
                    </Button>

                    <p className="card-text"> Existem <strong>{listItems.length}</strong> itens na lista: </p>
                </div>
                <div className="container-list">
                    <ul className="list">        
                        <List list={listItems} onRemove={decrementList} />
                    </ul>                
                </div>
            </div>
        </div>
    )
}

export default Card;