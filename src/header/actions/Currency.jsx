import { useState } from "react"
import styled from "styled-components"
import Vector from '../../img/Vector.svg'
import { useDispatch, useSelector } from "react-redux"
import { currencyActions } from "../../store/currencyslc"
const currencies = [
    { label: "USD", symbol: "$" }, {label: "GBP", symbol: "£"}, {label: "AUD", symbol: "A$"}, {label: "JPY", symbol: "¥"}, {label: "RUB", symbol: "₽"}];
const DropDown = styled.div `
    position: relative;
    display: inline-block;
    text-align: center;
    .selected {
        color: #5ECE7B;
    }
    .currencyContainer {
        display: flex;
        align-items: center;
        font-size: 15px;
        cursor: pointer;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        
    }
    .currencyOptions {
        z-index: 1000;
        background-color: white;
        border-radius: 5px;
        position: absolute;
        top: 100%;
        left: -100%;
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.3s ease-out;
        width: 114px;
    }
    .currencyOptions div {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        cursor: pointer;
    }
    .currencySymbol {
        padding-right: 10px;
    }
    .currencyOptions div:hover {
        background: #EEEEEE;
    }
    .currencyOptions.show {
        height: auto;
        max-height: 200px;
        transition: max-height 0.3s ease-in;
    }
    .arrow {
        transform-origin: center;
        transition: transform 0.3s;
    }
    .arrow.closed {
        transform: rotate(0deg);
    }
    .arrow.open {
        transform: rotate(-180deg);
    }
`

function CurrencySwitcher() {
    const dispatch = useDispatch();
    const currency = useSelector((state) => state.currency)
    const [shown, isShown] = useState(false)
    const itemContainerClick = () => {
        isShown(!shown)
    }
    const itemClick = (value) => {
        dispatch(currencyActions.changeCurrency(value))
        isShown(!shown)
    }
    const currencyOptions = currencies.map((currencyItem, index) => {
        return (
            <div key={currencyItem.label} onClick={() => {itemClick(index)}} className={`currency-option ${currency.value === index ? "selected" : ""}`}>{currencyItem.symbol} {currencyItem.label}</div>
        )
      })
    return (
        <DropDown>
            <div className="currencyContainer" onClick={itemContainerClick}>
                <div className="currencySymbol">{currency.symbol}</div>
                <img className={`arrow ${shown ? "open" : "closed"}`} src={Vector}/>
            </div>
            <div className={`currencyOptions ${shown ? "show" : ""}`}>{currencyOptions}</div>
        </DropDown>
    );
};
export default CurrencySwitcher;
