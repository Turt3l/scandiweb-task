import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartslc";
import { Link } from "react-router-dom";
import { useState } from "react";
const CartItems = ({ items, currency }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const dispatch = useDispatch();
  const renderedItems = items.map((item) => {
    const product = item.product;
    const key = item.key;
    const quantity = item.quantity;
    const attributesArray = [item.attribute1, item.attribute2, item.attribute3];

    const attributes = product?.attributes.map((attribute, attributeIndex) => {
      return (
        <div className="attribute-container" key={attribute.id}>
          <div className="attribute-name">{attribute.name}</div>
          <div className="attribute-item-container">
            {attribute.items.map((item, itemIndex) => (
              <div
                key={item.id}
                className={`attribute-item
                        ${attribute.type === "text" ? "text" : "swatch"}
                        ${attributesArray[attributeIndex] === itemIndex
                    ? "selected"
                    : ""
                  }
                      `}
                style={
                  attribute.type === "swatch"
                    ? { backgroundColor: item.value }
                    : {}
                }
                onClick={() => { }}
              >
                {attribute.type === "text" ? item.value : ""}
              </div>
            ))}
          </div>
        </div>
      );
    });

    return (
      <div className="item-container" key={key}>
        <div className="details-container">
          {/* <div className="brand"><Link to={`/${product.id}`}>{product.brand}</Link></div>
              <div className="name"><Link to={`/${product.id}`}>{product.name}</Link></div> */}
          <div className="price">
            {currency.symbol}
            {item.product.prices[currency.value].amount.toFixed(2)}
          </div>
          {product.attributes.length > 0 ? (
            <div className="attributes-container">{attributes}</div>
          ) : null}
        </div>
        <div className="quantity-container">
          <button className="quantity-button" onClick={() => dispatch(cartActions.addToCart([product, attributesArray[0], attributesArray[1], attributesArray[2]]))}>+</button>
          <div className="quantity">{quantity}</div>
          <button className="quantity-button" onClick={() => dispatch(cartActions.removeFromCart([product, attributesArray[0], attributesArray[1], attributesArray[2]]))}>-</button>
        </div>
        <div className="image-container">
          <img src={product.gallery[0]} alt={product.id}></img>
        </div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
export default CartItems;