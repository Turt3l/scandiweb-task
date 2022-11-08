import styled from "styled-components";
import Cart from "./Cart";
import CurrencySwitcher from "./Currency";


const ActionHolder = styled.div `
    width: 25%;
    text-align: right;
    display: inline-block;
`
const Actions = () => {

    return (    
    <ActionHolder>
        <CurrencySwitcher />
        <Cart />
    </ActionHolder>)

}
export default Actions;