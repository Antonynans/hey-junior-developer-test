import React from "react";
import Navbar from "./navbar";
import styled from "styled-components/macro";
import { order } from "./data";
import hoverCartIcon from "./assets/hoverCartIcon.svg";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_PRODUCT } from "../gql/Query";
import { useHistory } from "react-router-dom";

const Divs = styled.div`
  width: 100%;
  position: relative;
  display: none;
`;

const Div = styled.div`
  &.container {
    padding: 2rem 4rem;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  &.gridDiv {
    display: grid;
    grid-template-columns: ${({ grid }) =>
      grid ? grid : "repeat(auto-fill, minmax(30%, 3fr))"};
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    width: 100%;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }
  }
  &.grid_cards {
    box-shadow: 0 3px 10px #8b8eaf;

  }
  &.hoverDiv {
    position: relative;
    &:hover ${Divs} {
      display: flex;
    }
  }
  &.price_div {
    display: flex;
    align-items: center;
    gap: .2rem;
  }
`;

const Img = styled.img`
  position: relative;
  width: 95%;
  height: 30rem;
  object-fit: cover;
  cursor: pointer;
  &.outOfStock {
    opacity: 0.5;
  }
`;

const Imgs = styled.img`
  &.hover {
    width: 52px;
    height: 52px;
    position: absolute;
    margin-top: -2rem;
    cursor: pointer;
    right: 2rem;
  }
`;

const Text = styled.p`
  &.outOfStock {
    position: absolute;
    opacity: 0.5;
    top: 50%;
    right: 50%;
  }
`;


export default function Home() {
  // const [result] = useQuery({
  //   query: PRODUCTS,
  // });
  // const { data, fetching, error } = result;

  // if (fetching) return "Loading...";
  // if (error) return <pre>{error?.message}</pre>

  // console.log('====================================');
  // console.log(data);
  // console.log('====================================');

  let history = useHistory();

const { loading, error, data }= useQuery(GET_PRODUCT)
const { loading:loadingCategory, error:errorCategory, data:dataCategory }= useQuery(GET_CATEGORIES)

// console.log('====================================');
// console.log(dataCategory.category?.products?.map((item) => item.gallery[0]), dataCategory?.category?.products?.map((item) => item.gallery));
// console.log('====================================');


  return (
    <>
      <Navbar />

      <Div className="container">
        <p>Category name</p>
        <Div className="gridDiv" id="women">
          {dataCategory?.products?.map((item) => {
            return (
              <Div className="grid_cards" key={item.id}>
                <Div className="hoverDiv">
                  {item.inStock ? (
                    <Img src={item.gallery[0]} alt="" className="productImg" onClick={() => history.push(`/product/${item.id}`)}/>
                  ) : (
                    <>
                      <Img src={item.gallery[0]} alt="" className="outOfStock" onClick={() => history.push(`/product/${item.id}`)} />
                      <Text className="outOfStock">OUT OF STOCK</Text>
                    </>
                  )}
                  <Divs>
                    <Imgs className="hover" src={hoverCartIcon} alt="" />
                  </Divs>
                </Div>
                <p>{item.name}</p>
                <Div className='price_div'>
                {item.prices.map((item) => item.currency.symbol)[0]} <p>{item.prices.map((item) => item.amount)[0]}</p>
                </Div>
              </Div>
            );
          })}
        </Div>
      </Div>
    </>
  );
}
