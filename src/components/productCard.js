import React, { Component } from "react";
import styled from "styled-components/macro";
import { CartContextConsumer } from "../context/cartContext";
import hoverCartIcon from "./assets/hoverCartIcon.svg";

const Divs = styled.div`
  width: 100%;
  position: relative;
  display: none;
`;

const Div = styled.div`
  &.container {
    display: flex;
    flex-flow: column;
  }
  &.hoverDiv {
    position: relative;
    &:hover ${Divs} {
      display: flex;
    }
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

export default class ProductCard extends Component {
  state = { showCart: false };

  render() {
    const { inStock, id, attributes } = this.props.product;

    const atr = attributes?.map((attribute) => ({
      [attribute?.name]: attribute?.items[0].displayValue,
    }));

    const defaultObjAttr = Object.assign({}, ...atr);
    return (
      <Div>
        {!inStock && !this.state.showCart ? null : (
          <CartContextConsumer>
            {({ addToCart }) => (
              <Div
                onClick={() => {
                  addToCart({
                    data: this.props,
                    quantity: 1,
                    id: id,
                    attributes: defaultObjAttr,
                  });
                }}
              >
                <Imgs className="hover" src={hoverCartIcon} alt="" />
              </Div>
            )}
          </CartContextConsumer>
        )}
      </Div>
    );
  }
}
