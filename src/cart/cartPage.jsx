import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CartItems from "./items";
import { cartActions } from "../store/cartslc";

const CartContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    div {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 27px;
    }
    .details-container {
        width: 100%;
    }
    .attribute-item-container {
        display: flex;
        margin-bottom: 10px;
    }
    .item-container {
        padding-top: 30px;
        padding-bottom: 30px;
        border-top: 1px solid #E5E5E5;
        border-bottom: 1px solid #E5E5E5;
        display: flex;
    }
    img {
        max-width: 200px;
        max-height: 280px;
    }
    .headText h1 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
    }

    .attribute-name {
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
    }
    .name {
        padding-top: 16px;
        font-weight: 400;
        padding-bottom: 20px;
    }
    .quantity-container {
        align-self: center;
        padding-right: 50px;
    }
    .quantity {
        text-align: center;
        padding-bottom: 100%;
        padding-top: 100%;
    }
    .text {
        font-family: 'Source Sans Pro';
        font-weight: 600;
        font-size: 14px;
        line-height: 160%;
        border: 1px solid black;
        color: black;
        align-items: center;
        display: flex;
        /* text-align: center; */
        justify-content: center;
        width: 63px;
        height: 45px;

    }
    .attribute-item {
        margin-right: 10px;
    }
    .text.selected {
        background-color: black;
        color: white;
    }
    .price {
        font-size: 24px;
        line-height: 24px;
        padding-bottom: 20px;
    }
    .swatch {
        width: 40px;
        height: 40px;
    }
    .orderButton button {
        width: 280px;
        height: 40px;
        background: #5ECE7B;
        border: none;
        color: white;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        cursor: pointer;
    }
    .orderButton button:hover {
        background: #387B49;
    }
    h4 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }
    .quantity-button {
        background-color: white;
        border: 1px solid black;
        width: 45px;
        height: 45px;
        font-size: 20px;
    }
    .attribute-name {
        padding-bottom: 10px;
    }
    .swatch.selected {
        border: 1px solid #5ECE7B;
    }
    a {
        text-decoration: none;
        color: black;
    }
`

const CartPage = () => {
    const currency = useSelector((state) => state.currency);
    const cart = useSelector((state) => state.cart);
    const items = Object.values(cart.items);
    const total = 0;
    const tax = ((total * 21) / 100) + total;
    
    const dispatch = useDispatch();
    return (
        <CartContainer>
            <div className="headText">
                <h1>CART</h1>
            </div>
            <div className="itemContainer">
                <CartItems items={items} currency={currency} />
            </div>
            <div className="priceContainer">
                <h4>Tax 21%: <b>{currency.symbol}{tax}</b></h4>
                <h4>Quantity: <b>{cart.quantity}</b></h4>
                <h4>Total: <b>{currency.symbol}{total}</b></h4>
                <div className="orderButton">
                    <button onClick={() => dispatch(cartActions.buyItems())}>ORDER</button>
                </div>
            </div>
        </CartContainer>
    );
}
export default CartPage;