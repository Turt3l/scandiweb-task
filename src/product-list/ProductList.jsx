import { useSelector } from "react-redux";
import styled from "styled-components";
import useProducts from "../store/getProducts";
import { cartActions } from "../store/cartslc";
import Products from "./Product";

const StyledPage = styled.div`
  .categoryName {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
  }
`;

const HomePage = () => {
  const currency = useSelector((state) => state.currency);
  const category = useSelector((state) => state.category);
  
  const { productsLoading, productsData, productsError } = useProducts(
    category.text
  );

  if (productsLoading) return <h1>Loading...</h1>;
  if (productsError) return <h1>Error...</h1>;

  return (
    <StyledPage>
      <h1 className="categoryName">{productsData.category.name}</h1>
      <Products
        productsData={productsData}
        cartActions={cartActions}
        currency={currency}
      />
    </StyledPage>
  );
};

export default HomePage;