import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productData from "./assets/product-data.json";
import ProductItem from "./components/ProductItem.js";
import Cart from "./components/Cart.js"
import { ListGroup } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import FilterButton from './components/FilterButton';
import { createPortal } from 'react-dom';

function App() {


  const [cartItems, setCartItems] = useState([]);
  const itemsPrice = cartItems.reduce((a,c) => a + c.price, 0);

  const onAddItem = (item) => {
    setCartItems([...cartItems, {...item, qty: 1}]);
  }

  const onDeleteItem = (item) => {
    setCartItems(cartItems.filter((x) => x.name !== item.name));
  }

  const [type, setType] = useState("All");

  const selectFilterType = eventKey => {
    setType(eventKey);
  };

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if(type === "All") { 
      return true
    } else if (type === item.brand) {
      return true
    } else {
      return false
    }
  }

  const filteredData = productData.filter(matchesFilterType);

  const [color, setColor] = useState("All");

  const selectFilterColor = eventKey => {
    setColor(eventKey);
  };

  const matchesFilterColor = item => {
    // all items should be shown when no filter is selected
    if(color === "All") { 
      return true;
    } else if (color === item.color) {
      return true
    } else {
      return false
    }
  }

  const filteredDataColor = filteredData.filter(matchesFilterColor);


  const [sort, setSort] = useState("Unsorted");

  const selectSort = eventKey => {
    setSort(eventKey);
  };

  const matchesSort = item => {
    if(sort === "Unsorted") {
      return item;
    } else if (sort === "Sorted") {
      return item.sort((a,b) => {return a.price - b.price});
    }
  }

  const sortedData = matchesSort(filteredDataColor);


  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Athletic Apparel Store</h1>
      </header>
      
      <body className="App-body">
        <div class="container">
          <div class="row">
            <div class="col-sm-8"> 

              <h2>Products</h2>

              <div class="row row-cols-1 row-cols-md-2 g-4">
                {sortedData.map((item) => (
                  <ProductItem onAddItem={onAddItem} onDeleteItem={onDeleteItem} name={item.name} brand={item.brand} price={item.price} color={item.color} image={item.image}></ProductItem>
                ))}
              </div>
            </div>

            <div class="col-sm-4"> 
            <div className="col-12">
              <h4>
                Favorites Price:
                <Cart onAddItem={onAddItem} onDeleteItem={onDeleteItem} cartItems={cartItems} itemsPrice={itemsPrice}></Cart>
              </h4>
            </div>  
            <div className="col-12">
              <h4>
                Filters
              </h4>
              <Nav onSelect={selectFilterType}>
              <FilterButton selectFilterType={selectFilterType} eventKey={"All"}></FilterButton>
              <FilterButton selectFilterType={selectFilterType} eventKey={"Alphalete"}></FilterButton>
              <FilterButton selectFilterType={selectFilterType} eventKey={"Alo Yoga"}></FilterButton>
              <FilterButton selectFilterType={selectFilterType} eventKey={"Lululemon"}></FilterButton>
              <FilterButton selectFilterType={selectFilterType} eventKey={"Nike"}></FilterButton>
              <FilterButton selectFilterType={selectFilterColor} eventKey={"Black"}></FilterButton>
              <FilterButton selectFilterType={selectFilterColor} eventKey={"Blue"}></FilterButton>
              <FilterButton selectFilterType={selectFilterColor} eventKey={"Pink"}></FilterButton>

              </Nav>
              <h4>
                Sort 
              </h4>
              <Nav onSelect={selectSort}>
              <Nav.Item><Nav.Link eventKey="Unsorted">Popular</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Sorted">Sort by Price</Nav.Link></Nav.Item>

              </Nav>

            </div>                
            </div>
          </div>
        </div>
      </body>


    </div>
  );
}

export default App;
