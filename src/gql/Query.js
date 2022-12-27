import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
      description
      id
      name
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
      category
      inStock
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
    }
  }
`;

export const GET_CATEGORY = gql`
query category($input: String!) {
category(input: {title: $input}){
    name
    products{
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
    }

  }
}
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;
