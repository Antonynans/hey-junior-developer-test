import React, { Component } from "react";
import { CartContextConsumer } from "../context/cartContext";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { Button, Div, Input, Label, Text } from "./addToCartStyle";

export default class AddToCartForm extends Component {
  state = {};

  handleFormOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  ctaBtn = React.createRef();

  render() {
    const { productProps } = this.props;

    return (
      <>
        <CartContextConsumer>
          {(context) => (
            <form
              onSubmit={(e) => {
                context.addToCart({
                  data: this.props.data,
                  quantity: 1,
                  id: productProps.id,
                  attributes: this.state,
                });
                e.preventDefault();
              }}
            >
              {productProps?.attributes?.map((item) => (
                <Div key={item.name}>
                  <Text className="title-desc title">{item.name}:</Text>

                  <Div className="size-div">
                    {item.items.map((val) => (
                      <div key={val.value}>
                        {item.type !== "swatch" ? (
                          <Div className="inputContainer" isSwatch>
                            <Input
                              type="radio"
                              onChange={this.handleFormOnChange}
                              name={item?.name}
                              value={val?.displayValue}
                              required
                              isSwatch
                            />
                            <Label isSwatch>{val.value}</Label>
                          </Div>
                        ) : (
                          <>
                            <Div className="inputContainer">
                              <Input
                                onChange={this.handleFormOnChange}
                                name={item?.name}
                                value={val?.displayValue}
                                type="radio"
                                required
                              />
                              <Label color={val.value}>
                              </Label>
                            </Div>
                          </>
                        )}
                      </div>
                    ))}
                  </Div>
                </Div>
              ))}
              <CurrencyContextConsumer>
                {({ currencyIndex }) => (
                  <>
                    <Text className="title-desc title">PRICE:</Text>
                    <Div className="price-div">
                      <Div className="price-sub-div">
                        {productProps?.prices[currencyIndex].currency.symbol}
                        {productProps?.prices[currencyIndex].amount}
                      </Div>
                    </Div>
                  </>
                )}
              </CurrencyContextConsumer>
              <CartContextConsumer>
                {(context) => (
                  <Button
                    className="addCartBtn"
                    content={this.ctaBtn.innerHTML}
                    disabled={!productProps?.inStock}
                  >
                    {productProps?.inStock
                      ? context?.isItemInCart(this.props.data.product.id, {
                          attributes: this.state,
                        })
                      : "Out of stock"}
                  </Button>
                )}
              </CartContextConsumer>
            </form>
          )}
        </CartContextConsumer>
      </>
    );
  }
}
