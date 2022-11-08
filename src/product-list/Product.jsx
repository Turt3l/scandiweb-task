import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProducts = styled.div `
  display: flex;
  flex-wrap: wrap;
  .product-container {
    position: relative;
    display: inline-block;
    width: 20%;
    margin: 20px;
    padding: 16px 16px  98px;
    transition: box-shadow 0.5s;
  }
  .product-container:hover {
    box-shadow: 0px 4px 35px #a8acb0;
  }
  .product-image img {
    max-width: 100%;
    width: auto;
    height: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .product-brand {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
  }
  .product-price {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
  }
  .product-container.out-of-stock{
    opacity:0.5;
  }
  .product-container svg {
    float: right;
    display: none;
  }
  .out-of-stock .stock-text {
    position: absolute;
    transform: translateY(-50%);
    display: inline-block;
    text-align: center;
    top: 40%;
    margin: 0;
  }
  .stock-text {
    display: none;
    position: absolute;
    font-size: 1.5rem;
    left: 25%;
    transform: translate(-25%, -75%);
    line-height: 160%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
  }
  .product-container:hover svg {
    display: block;
    height: 52px;
    width: 52px;
    padding-top: 10px;
    text-align: center;
  }
  .product-container.out-of-stock svg {
    display: none;
  }
  .product-description {
    width: 80%;
  }
  .cart {
    opacity: 0;
    transition: opacity 0.5s;
  }
  .product-container:hover .cart{
    opacity: 1;
  }
  a {
  color: black;
  text-decoration: none;
  }
  .product-container.out-of-stock .product-image {
    pointer-events: none;
  }
  .productContainer.out-of-stock {
    pointer-events: none;
    opacity: 0.5;
  }
  .product-container.out-of-stock .product-brand {
    pointer-events: none;
  }
`
const Products = ({ productsData, cartActions, currency }) => {
  const dispatch = useDispatch();
  const products = productsData.category.products;
  const renderedProducts = products.map((product) => {
    return (
      <div key={product.id} className={`product-container ${product.inStock ? '' : 'out-of-stock'}`}>
        <p className="stock-text">OUT OF STOCK</p>
        <Link className="product-image"  to={`/${product.id}`}>
          <img src={product.gallery[0]}></img>
        </Link>
        <div className="cart" onClick={() => dispatch(cartActions.addToCart([product, 0, 0, 0]))}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="26" fill="#5ECE7B"/>
            <path d="M37.4736 19.8484C37.0186 19.2925 36.3109 18.9546 35.5785 18.9546H20.1907L19.711 17.1669C19.4326 16.1277 18.4732 15.4028 17.3608 15.4028H14.7837C14.3544 15.4028 14 15.7407 14 16.1523C14 16.5628 14.3534 16.9017 14.7837 16.9017H17.3608C17.7398 16.9017 18.0685 17.1433 18.1692 17.5058L21.2517 29.2494C21.53 30.2886 22.4894 31.0135 23.6018 31.0135H33.6833C34.7947 31.0135 35.7808 30.2886 36.0335 29.2494L37.9286 21.807C38.1053 21.1293 37.9543 20.4044 37.4736 19.8485L37.4736 19.8484ZM36.3879 21.4671L34.4928 28.9095C34.3921 29.272 34.0634 29.5136 33.6844 29.5136H23.6018C23.2228 29.5136 22.8941 29.272 22.7935 28.9095L20.5953 20.4772H35.5796C35.8323 20.4772 36.085 20.598 36.237 20.7915C36.388 20.984 36.463 21.2257 36.388 21.4673L36.3879 21.4671Z" fill="white"/>
            <path d="M24.1332 31.9778C22.6932 31.9778 21.5059 33.1132 21.5059 34.4902C21.5059 35.8672 22.6933 37.0027 24.1332 37.0027C25.5733 37.0036 26.7606 35.8682 26.7606 34.491C26.7606 33.1137 25.5732 31.9775 24.1332 31.9775V31.9778ZM24.1332 35.4814C23.5519 35.4814 23.0968 35.0463 23.0968 34.4903C23.0968 33.9344 23.5519 33.4993 24.1332 33.4993C24.7146 33.4993 25.1696 33.9344 25.1696 34.4903C25.1687 35.0227 24.689 35.4814 24.1332 35.4814Z" fill="white"/>
            <path d="M32.8251 31.978C31.3851 31.978 30.1978 33.1135 30.1978 34.4905C30.1978 35.8675 31.3852 37.0029 32.8251 37.0029C34.2651 37.0029 35.4525 35.8675 35.4525 34.4905C35.4279 33.1143 34.2651 31.978 32.8251 31.978ZM32.8251 35.4816C32.2438 35.4816 31.7887 35.0465 31.7887 34.4906C31.7887 33.9346 32.2438 33.4995 32.8251 33.4995C33.4065 33.4995 33.8615 33.9346 33.8615 34.4906C33.8615 35.0229 33.3809 35.4816 32.8251 35.4816Z" fill="white"/>
          </svg>
        </div>
        <div className="product-description">
          <Link className="product-brand" to={`/${product.id}`}>
            <p>{product.brand} {product.name}</p>
          </Link>
          <div className="product-price">
            {currency.symbol}{product.prices[currency.value].amount}
          </div>
        </div>
      </div>
    );
  });

  return <StyledProducts>{renderedProducts}</StyledProducts>;
};

export default Products;