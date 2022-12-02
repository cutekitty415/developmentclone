import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productData from "./assets/product-data.json";
import ProductItem from "./components/ProductItem.js";
import Cart from "./components/Cart.js"
import { ListGroup } from "react-bootstrap";
import { Nav } from 'react-bootstrap';

function App() {


  const [cartItems, setCartItems] = useState([]);
  const itemsPrice = cartItems.reduce((a,c) => a + c.price, 0);

  const onAddItem = (item) => {
    setCartItems([...cartItems, {...item, qty: 1}]);
  }

  const onDeleteItem = (item) => {
    setCartItems(cartItems.filter((x) => x.name !== item.name));
  }

  const emptyCart = (item) => {
    setCartItems([]);
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
        <h1>Ascend Apparel</h1>
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
            <div>
              <h4>
                Brand
              </h4>
              <Nav onSelect={selectFilterType}>
              <Nav.Item class="active"><Nav.Link eventKey="All"> All </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Alphalete"> Alphalete </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Alo Yoga"> Alo Yoga </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Lululemon"> Lululemon </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Nike"> Nike </Nav.Link></Nav.Item>
              </Nav>
              <h4>
                Color 
              </h4>
              <Nav onSelect={selectFilterColor}>
              <Nav.Item class="active"><Nav.Link eventKey="All"> All </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Black"> Black </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Blue"> Blue </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Pink"> Pink </Nav.Link></Nav.Item>
              </Nav>
              <h4>
                Sort 
              </h4>
              <Nav onSelect={selectSort}>
              <Nav.Item><Nav.Link eventKey="Unsorted">Popular</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Sorted">Sort by Price</Nav.Link></Nav.Item>

              </Nav>

            </div>  

            <div className="col-12">
              <h4>
                <Cart cartItems={cartItems} emptyCart={emptyCart} itemsPrice={itemsPrice}></Cart>
              </h4>
            </div>  

            </div>
          </div>
        </div>
      </body>


    </div>
  );
}

export default App;
