import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { cartActions } from "../store/cartslc";
import useProduct from "../store/getProduct";
const PageContainer = styled.div`
  padding-top: 80px;
  display: flex;
  z-index: -10 !important;
  .detailContainer {
    width: 40%;
  }
  .galleryContainer {
    display: flex;
    width: 60%;
  }
  .description {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
  }
  .addToCart button {
    cursor: pointer;
    border: none;
    color: white;
    background: #5ECE7B;
    padding: 16px 32px;
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 40px;
  }
  .priceValue {
    padding-bottom: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
  }
  .priceText {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    padding-bottom: 10px;
    padding-top: 36px;
    font-size: 18px;
    line-height: 18px;
  }
  .swatch{
    cursor: pointer;
    width: 32px;
    height: 32px;
  }
  .swatch.selected {
    border: 1px solid #5ECE7B;

  }
  .attributeItemContainer {
    display: flex;
    align-items: center;
    width: auto;
  }
  .text {
    cursor: pointer;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    width: 18px;
    height: 18px;
    padding: 13px 22px;
    border: 1px solid #1D1F22;
    margin-right: 12px;
    justify-content: center;
    text-align: center;
    display: flex;
  }
  .attributeName {
    padding-top: 40px;
    padding-bottom: 8px;
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }
  .model {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
  }
  .brand {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
  }
  .text.selected {
    background-color: black;
    color: white;
  }
  .activeImage img{
    height: 700px;
    max-width: 800px;
    float: right;
  }
  .imageContainer img{
    max-width: 100px;
    max-height: 100px;
  }
  .gallery {
    width: 80px;
    padding-right: 70px;
  }
  button:hover {
    background: #387B49;
  }
`
const ProductPage = () => {
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productLoading, productData, productError } = useProduct(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [attributeValues, setAttributeValues] = useState({ 0: 0, 1: 0, 2: 0 });
  const handleAttributeChange = (attribute, value) => {
    setAttributeValues((prev) => ({ ...prev, [attribute]: value }));
  };
  const addToCart = () => {
    dispatch(
      cartActions.addToCart([
        productData,
        attributeValues[0],
        attributeValues[1],
        attributeValues[2]
      ])
    );
  };
  if (productLoading) return <div>Loading...</div>;
  if (productError) return <div>Error...</div>;
  return (
    <PageContainer>
      <div className="galleryContainer">
      <div className="gallery">
          {productData.gallery.map((image, index) => {
            return (
              <div className="imageContainer" key={index}>
                <img
                  src={image}
                  alt={index}
                  onClick={() => setSelectedImage(index)}
                />
              </div>
            );
          })}
        </div>  
        <div className="activeImage">
          <img
              src={productData.gallery[selectedImage]}
              alt={selectedImage}
          />
        </div>
      </div>
      <div className='detailContainer'>
        <div className="title">
          <div className="brand">{productData.brand}</div>
          <div className="model">{productData.name}</div>
        </div>
        <div className="attributes">
          {productData.attributes.map((attribute, attributeIndex) => {
            return (
              <div className="attributeContainer" key={attribute.id}>
                <div className="attributeName">{attribute.name}:</div>
                <div className="attributeItemContainer">
                  {attribute.items.map((item, itemIndex) => (
                    <div
                      key={item.id} className={`attribute-item ${attribute.type === "text" ? "text" : "swatch"} ${attributeValues[attributeIndex] === itemIndex ? "selected" : ""}`}
                      style={attribute.type === "swatch" ? { backgroundColor: item.value }: {}}
                      onClick={() => handleAttributeChange(attributeIndex, itemIndex)}
                    >
                      {attribute.type === "text" ? item.value : ""}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="priceText">PRICE:</div>
        <div className="priceValue">
          {currency.symbol}
          {productData.prices[currency.value].amount.toFixed(2)}
        </div>
        <div className={`addToCart ${productData.inStock ? "": "outOfStock"}`}>
          <button onClick={addToCart}>ADD TO CART</button>
        </div>
        <div className="description">
          <section dangerouslySetInnerHTML={{__html: productData.description}} />
        </div>
      </div>
    </PageContainer>
  )
}

export default ProductPage;