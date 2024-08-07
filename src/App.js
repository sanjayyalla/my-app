import React from "react";
import ProductsAdmin from "./Products/ProductsAdmin";
import Navbar from "./Navbar/Navbar";
import ProductList from "./Products/ProductList";
import CreateProduct from "./Products/CreateProduct";
import UpdateProduct from "./Products/UpdateProduct";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
  return (
    <Router>
   <Navbar/>
   <Routes>
    <Route path="/productslist" Component={ProductList}></Route>
    <Route path="/createproduct" Component={CreateProduct}></Route>
    <Route path="/admin" Component={ProductsAdmin}></Route>
    <Route path="/update/:id" Component={UpdateProduct}></Route>
   </Routes>
   </Router>
  );
}

export default App;
