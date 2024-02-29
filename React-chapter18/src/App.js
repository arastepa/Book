import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Card from './components/Card'
import {DUMMY_PRODUCTS} from './DummyProducts'
import { useMemo, useState } from 'react';

const filterProducts = (category) => {
  if(category === "All"){
    return DUMMY_PRODUCTS
  }
  return DUMMY_PRODUCTS.filter(elm => elm.category === category)
}

const calculateTotal = (card) => {
  return card.reduce((counter, item) => counter + item.price*item.quantity, 0)
}

function App() {
  const [filterText, setFilterText] = useState("All")
  const products = useMemo(() => filterProducts(filterText), [filterText])
  const [card, setCard] = useState([])
  const total = useMemo(() => calculateTotal(card), [card])
  
  const clear = (card) => {
    setCard([]);
  }

  const moveToCard = product => {
    if(!card.includes(product)){
      product.quantity = 1
      card.push(product)
    } else {
      product.quantity++
    }
    setCard([...card])
  }

  const quantityUp = product => {
    product.quantity++
    setCard([...card])
  }
    
  const quantityDown = product => {
    product.quantity--
    if(product.quantity == 0){
      card.splice(card.indexOf(product),1)
    }
    setCard([...card])
  }

  const removeFromCard = product => {
    card.splice(card.indexOf(product),1)
    setCard([...card])
  }

  return (
    <div>
      <Header
        onFilter = {(text) => setFilterText(text) }
      />
      <div className="flex">
        <ProductList
          products = {products}
          onMove = {moveToCard}
        />
        <Card
          items = {card}
          total = {total}
          onQuantityUp = {quantityUp}
          onQuantityDown = {quantityDown}
          onDelete = {removeFromCard}
          onClear = {clear}
        />
      </div>
    </div>
  );
  
}
export default App;