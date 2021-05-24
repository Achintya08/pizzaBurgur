import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {Header} from "./components/navbar";
import {HomePage} from "./components/homePage";
import {PizzaItems} from "./components/Pizzas";
import {BItems} from "./components/bitems";
import {CartItems} from "./components/cart";

function App() {



  var datafromAPI;
  var datafromCartAPI;
  const [allItems, updateallItems] = useState([]);
  const [itemInCart, updatecartitems] = useState([]);
  
  const API_BASE_URL = "http://localhost:8080";
   
  
  async function fetchItems(){
    const allData = await axios.get(`${API_BASE_URL}/allItems`);
    datafromAPI = allData.data;
    updateallItems(datafromAPI.results);
   }
   async function fetchItemsinCart(){
    const allcartData = await axios.get(`${API_BASE_URL}/cart/cartProducts`);
    datafromCartAPI = allcartData.data;
    updatecartitems(datafromCartAPI);
   }


   async function addToCart(item){
    const createTask = await axios.post(`${API_BASE_URL}/cart/addToCart`, {
        
      "productName" : item.name,
      "description": item.description,
      "imageURL": item.image,
      "price": item.price

  
  }
  );
  alert("Item added successfully");
  fetchItemsinCart();
  }
  
   useEffect(()=>{fetchItems();},[]);
   
  return (
    <Router>
    <div className="App">
    <Header itemInCart={itemInCart} />
    <Switch>
    <Route
            path="/"
            component={HomePage}
            exact
            
      /> 
      
      <Route
            path="/pizza"
            component={()=>(<PizzaItems
             allItems={allItems}
             addToCart = {addToCart} /> )}
            
      />
       
       <Route
            path="/burgur"
            component={()=>(<BItems 
            allItems={allItems}
            addToCart = {addToCart} /> )}
            
      />
      <Route
            path="/cart"
            component={()=>(<CartItems
              itemInCart={itemInCart}
              fetchItemsinCart={fetchItemsinCart}
            />)}
            
      />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
