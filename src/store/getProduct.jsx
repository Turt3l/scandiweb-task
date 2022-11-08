import { gql, useQuery } from "@apollo/client";
const useProduct = (id) => {
  const GET_PRODUCT = gql`
    query {
      product(id: "${id}") {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          amount
        }
        brand
      }
    }
  `;
  const { loading, data, error } = useQuery(GET_PRODUCT);
  const productLoading = loading;
  const productData = data?.product;
  const productError = error;
  return { productLoading, productData, productError };
};
export default useProduct;