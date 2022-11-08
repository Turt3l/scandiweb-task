import styled from "styled-components";
import cartf from "../../img/Cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../../cart/items";
import { cartActions } from "../../store/cartslc";

const CartContainer = styled.div`
display: inline-block;
position: relative;
padding-left: 22px;
background-color: white;
.headerLogo {
    cursor: pointer;
}

.counter {
    width: 20px;
    border-radius: 20px;
    height: 20px;
    justify-content: center;
    background-color: black;
    color: white;
    position: absolute;
    bottom: 25%;
    right: -15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 10%;
}
.CartItems {
    box-shadow: 0px 1px 8px #a8acb0;
    position: absolute;
    overflow-y:auto;
    max-height:100%
    position: absolute;
    background-color: #fff;
    padding: 16px 32px;
    font-family: 'Raleway';
    font-style: normal;
    font-size: 16px;
    line-height: 160%;
    text-align: left;
    width: 325px;
    max-height: 677px;
    z-index: 1 !important;
    top:50px;
    left:50%; 
    transform:translateX(-40%);
    margin-left: -175px;
}

.quantityContainer b{
    font-weight: 700;
}
.quantityContainer {
    padding-top: 32px;
}
.items {
    display: flex;
    flex-direction: column;
}
img{
    max-width: 121px;
    max-height: 190px;
}
.headerLogo img {
    padding-top: 100%;
}
.price {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
}
.quantity-button {
    cursor: pointer;
}
.swatch {
    width: 20px;
    height: 20px;
}
.attribute-item {
    margin-right: 8px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
}
.text {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    border: 1px solid black;
    color: black;
    width: 40px;
    align-items: center;
    display: flex;
    /* text-align: center; */
    justify-content: center;
    height: 40px;
}
.text.selected {
    background-color: black;
    color: white;
}
.attribute-item-container {
    display: flex;
    align-items: center;
}

.attribute-item-container {
    display: flex;
}
.item-container {
    display: flex;
}
.details-container {
    width: 60%;
}
.itemContainer .quantity-container {
    width: 10%;
}
.item-container {
    padding-top: 40px;
}
.buttonContainer button, a {
    margin-top: 32px;
    width: 145px;
    height: 40px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
}
a {
    color: black;
    text-decoration: none;
}
.buttonContainer button{
    border: none;
    color: white;
    background: #5ECE7B;
    cursor: pointer;
}
.buttonContainer button:hover {
    background: #387B49;
}
.buttonContainer a {
    cursor: pointer;
    margin-right: 15px;
    text-decoration: none;
    color: black;
    padding: 11px 38px;
    border: 1px solid black
}
.quantity-button {
    background-color: white;
    border: 1px solid black;
    width: 24px;
    height: 24px;
}
.quantity {
    padding-left: 20%;
    padding-bottom: 100%;
    padding-top: 100%;
}
.quantity-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.swatch.selected {
    border: 1px solid #5ECE7B;
}


`

const Cart = () => {
    const dispatch = useDispatch();
    const currency = useSelector((state) => state.currency);
    const cart = useSelector((state) => state.cart);
    const items = Object.values(cart.items);
    const [cartMenuOpen, setCartMenuOpen] = useState(false);
    const [attributeValues, setAttributeValues] = useState({ 0: 0, 1: 0, 2: 0 });
    const total = 0;
    const handleToggleCartMenu = () => {
        setCartMenuOpen((previous) => !previous);
    };

    return (
        <CartContainer>
            <div className="headerLogo" onClick={handleToggleCartMenu}>
                <div className="counter">{cart.quantity}</div>
                <img src={cartf}></img>
            </div>
            <div className={`CartItems ${cartMenuOpen ? "" : "closed"}`} style={cartMenuOpen ? {} : { display: "none" }}>
                <div className="quantityContainer">
                    <b>My bag,</b> {cart.quantity} items
                </div>
                <div className="itemContainer">
                    <CartItems className="items" items={items} currency={currency} />
                </div>
                <div className="total">
                    <h3>Total: {currency.symbol}{total}</h3>
                </div>
                <div className="buttonContainer">
                    <Link to="/cart">VIEW BAG</Link>
                    <button onClick={() => dispatch(cartActions.buyItems())}>CHECK OUT</button>
                </div>
            </div>
        </CartContainer>
    )
}
export default Cart;