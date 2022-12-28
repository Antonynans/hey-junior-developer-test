import React, { Component } from "react";
import Navbar from "../navbar";
import styled from "styled-components/macro";
import hoverCartIcon from "../assets/hoverCartIcon.svg";
import { request } from "graphql-request";
import { GET_CATEGORY } from "../../gql/Query";
import withRouter from "./withRouter";


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
    gap: 0.2rem;
  }
  &.cat-div {
    display: flex;
    justify-content: flex-start;
    width: 100%;

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
  &.cat-head {
    margin-bottom: 103px;

    font-size: 42px;
  }
`;


export class Main extends Component {
  state = { productData: {} };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  fetchData() {
    const variables = {
      input: this.props.router.params.categoryId || "all",
    };

    request({
      url: "http://localhost:4000/",
      document: GET_CATEGORY,
      variables: variables,
    }).then((data) => {
      this.setState({ productData: data.category });
    });
  }

  categoryName() {
    const categoryName = this.props.router.params.categoryId || "all";
    const categoryNameCapitalized =
      categoryName[0].toUpperCase() + categoryName.substring(1);
    return categoryNameCapitalized;
  }

  render() {
    return (
      <>
        <Navbar />

        <Div className="container">
          <Div className='cat-div'><Text className="cat-head">{this.categoryName()}</Text></Div>
          
          <Div className="gridDiv">
            {this.state.productData?.products?.map((item) => {
              return (
                <Div className="grid_cards" key={item.id}>
                  <Div className="hoverDiv">
                    {item.inStock ? (
                      <Img
                        src={item.gallery[0]}
                        alt=""
                        className="productImg"
                        onClick={() =>
                          this.props.history.push(`/product/${item.id}`)
                        }
                      />
                    ) : (
                      <>
                        <Img
                          src={item.gallery[0]}
                          alt=""
                          className="outOfStock"
                          onClick={() =>
                            this.props.history.push(`/product/${item.id}`)
                          }
                        />
                        <Text className="outOfStock">OUT OF STOCK</Text>
                      </>
                    )}
                    <Divs>
                      <Imgs className="hover" src={hoverCartIcon} alt="" />
                    </Divs>
                  </Div>
                  <p>{item.name}</p>
                  <Div className="price_div">
                    {item.prices.map((item) => item.currency.symbol)[0]}{" "}
                    <p>{item.prices.map((item) => item.amount)[0]}</p>
                  </Div>
                </Div>
              );
            })}
          </Div>
        </Div>
      </>
    );
  }
}

export default withRouter(Main);
