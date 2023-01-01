import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CartContextConsumer } from "../context/cartContext";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { Button, Div, Divs, Img, Text } from "./addToCartStyle";

class CartItemCard extends Component {
  state = {
    galleryIndex: 0,
  };

  changeGalleryIndex = (index) => {
    this.setState({
      galleryIndex:
        (this.state.galleryIndex +
          index +
          this.props.product.data.product.gallery.length) %
        this.props.product.data.product.gallery.length,
    });
  };

  render() {
    const { name, brand, prices, gallery, attributes } =
      this.props.product.data.product;

    const { cartPage } = this.props;

    return (
      <CartContextConsumer>
        {({ increase, decrease }) => (
          <Div className="cartItemComponent">
            <Div className="cart-item" isOnCartPage={cartPage}>
              <Text className="cartText" isOnCartPage={cartPage}>
                {brand}
              </Text>
              <Text className="cartName" isOnCartPage={cartPage}>
                {" "}
                {name}
              </Text>
              <CurrencyContextConsumer>
                {({ currencyIndex }) => (
                  <Text className="cartPrice" isOnCartPage={cartPage}>
                    {prices[currencyIndex].currency.symbol}
                    {prices[currencyIndex].amount}
                  </Text>
                )}
              </CurrencyContextConsumer>
              {attributes?.map((item) => (
                <Div key={item.name} className="attr-container">
                  {/* <div> */}
                  <Text className="title-desc">{item.name}:</Text>
                  {item.type !== "swatch" ? (
                    <Div className="attr-div" isOnCartPage={cartPage}>
                      {item.items.map((val) => (
                        <Divs
                          isOnCartPage={cartPage}
                          key={val.value}
                          className={
                            Object.values(this.props.product.attributes)[
                              Object.keys(
                                this.props.product.attributes
                              ).indexOf(item.name)
                            ] === val.displayValue
                              ? "selected-div"
                              : ""
                          }
                        >
                          {item.id === "Color" ? "" : val.value}
                        </Divs>
                      ))}
                    </Div>
                  ) : (
                    <Div className="attr-div" isOnCartPage={cartPage}>
                      {item.items.map((val) => (
                        <Divs
                          key={val.value}
                          className={
                            Object.values(this.props.product.attributes)[
                              Object.keys(
                                this.props.product.attributes
                              ).indexOf(item.name)
                            ] === val.displayValue
                              ? "selected"
                              : ""
                          }
                          bgColor={item.type === "swatch" ? val.value : ""}
                        ></Divs>
                      ))}
                    </Div>
                  )}
                </Div>
              ))}
            </Div>
            <Div className="gallery-div" isOnCartPage={cartPage}>
              <Div className="increaseDiv">
                <Button
                  isOnCartPage={cartPage}
                  className="increaseBtn"
                  onClick={() => increase(this.props.product.id)}
                >
                  +
                </Button>
                <Text>{this.props.cart[this.props.index].quantity}</Text>
                <Button
                  isOnCartPage={cartPage}
                  onClick={() => decrease(this.props.product.id)}
                  className="increaseBtn"
                >
                  -
                </Button>
              </Div>
              <Div className="arrowImg">
                <Img
                  isOnCartPage={cartPage}
                  src={gallery[this.state.galleryIndex]}
                  alt=""
                  className="cart-img"
                />
                {!this.props.cartPage || gallery.length < 2 ? null : (
                  <Div className="arrowBtnDiv">
                    <Button
                      className="arrowBtn"
                      onClick={() => this.changeGalleryIndex(1)}
                    >
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.25 4.06857L5.625 9.6876L11.25 15.3066"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                    <Button
                      className="arrowBtn"
                      onClick={() => this.changeGalleryIndex(-1)}
                    >
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.75 4.06857L12.375 9.6876L6.75 15.3066"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </Div>
                )}
              </Div>
            </Div>
          </Div>
        )}
      </CartContextConsumer>
    );
  }
}

export default withRouter(CartItemCard);
