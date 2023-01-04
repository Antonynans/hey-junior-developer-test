import React, { Component } from "react";
import Navbar from "../navbar";
import { request } from "graphql-request";
import styled from "styled-components/macro";
import { GET_PRODUCT } from "../../gql/Query";
import withRouter from "./withRouter";
import AddToCartForm from "../addToCart";
import DOMPurify from "dompurify";

const color1 = "#1D1F22";

const Div = styled.div`
  &.container {
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    padding-top: 5rem;
  }
  &.small-images-container {
    display: flex;
    flex-flow: column;
    gap: 2rem;
    padding-right: 2rem;
    height: 40rem;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  &.image-container {
    @media screen and (max-width: 375px) {
      display: flex;
      justify-content: center;
    }
  }
  &.image-detail-desc {
    display: flex;
    width: 60%;
  }
  &.product-detail-desc {
    width: 40%;
  }
  &.small-div {
    width: 63px;
    height: 45px;
    border: 1px solid ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
    cursor: pointer;

    &:hover {
      border: 1px solid ${color1};
      background-color: ${({ bgColor }) => (bgColor ? bgColor : color1)};

      color: white;
    }
  }
  &.selected-div {
    background: ${color1};
    color: white;
  }
  &.size-div {
    display: flex;
    gap: 0.2rem;
  }
  &.price-div {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    flex-wrap: wrap;
  }
  &.price-sub-div {
    display: flex;
    gap: 0.2rem;
    font-weight: 700;
    font-size: 24px;
  }
`;

const Img = styled.img`
  &.small-image {
    border-radius: 3px;
    background-color: #ebebeb;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
  &.selected-image {
    background-color: #f02d34;
  }
  &.product-detail-image {
    border-radius: 3px;
    background-color: #ebebeb;
    object-fit: cover;

    width: 100%;
    height: 40rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
`;

const Text = styled.p`
  margin: 0;

  &.product-title {
    font-weight: 600;
    font-size: 30px;
  }
  &.sub-title {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
  &.title-desc {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 18px;
    margin-top: 1.5rem;
  }
  &.desc {
    font-family: "Roboto", sans-serif;
  }
`;

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: {},
      index: 0,
      size: 0,
    };
  }

  componentDidMount() {
    const variables = {
      id: this.props.match.params.productId,
    };

    request({
      url: "http://localhost:4000/",
      document: GET_PRODUCT,
      variables: variables,
    }).then((data) => {
      this.setState({ productData: data });
    });
  }

  render() {

    return (
      <>
        <Navbar />
        <Div className="container">
          <Div className="image-detail-desc">
            <Div className="small-images-container">
              {this.state.productData?.product?.gallery?.map((item, i) => (
                <Img
                  key={i}
                  src={item}
                  className={
                    i === this.state.index
                      ? "small-image selected-image"
                      : "small-image"
                  }
                  onMouseEnter={() => this.setState({ index: i })}
                />
              ))}
            </Div>
            <Div className="image-container">
              <Img
                src={
                  this.state.productData?.product?.gallery &&
                  this.state.productData?.product?.gallery[this.state.index]
                }
                alt=""
                className="product-detail-image"
              />
            </Div>
          </Div>

          <Div className="product-detail-desc">
            <Text className="product-title">
              {this.state.productData?.product?.brand}
            </Text>
            <Text className="product-title sub-title">
              {this.state.productData?.product?.name}
            </Text>

            <AddToCartForm
              productProps={this.state.productData?.product}
              data={this.state.productData}
            />

            <Text
              className="desc"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  this.state.productData.product?.description
                ),
              }}
            ></Text>
          </Div>
        </Div>
      </>
    );
  }
}

export default withRouter(Products);
