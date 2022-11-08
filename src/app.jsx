import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./header/Header";
import ProductList from "./product-list/ProductList";
import ProductPage from "./product-page/ProductPage";
import CartPage from './cart/cartPage';
import React from "react";
const Wrap = styled.div `
  padding-left: 101px;
  padding-right: 101px;
  padding-bottom: 200px;
`

class App extends React.Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>   
      </Wrap>)
  };
}

export default App;