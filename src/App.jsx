import { useState } from 'react';
import Card from './components/Card';
import Item from './components/Item';

const App = () => {
  
  const [itens, setItens] = useState(0);

  function renderList() {

  }

  return(
    <>
      <h3>Lista interativa</h3>
      <Card />
    </>
  )
}

export default App;