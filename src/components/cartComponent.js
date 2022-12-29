import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CartContextConsumer } from "../context/cartContext";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { BackDrop, Button, Div, Dropdown, Img, Span, Text } from "../Style";
import cartImg from "./assets/cart.svg";
import CartItemCard from "./cardItemCart";

class CartComponent extends Component {
  state = { isToggleCart: false };

  toggleCart = () => {
    this.setState({ isToggleCart: !this.state.isToggleCart });
  };

  goToCart = () => {
    this.props.history.push("/cart");
    this.toggleCart();
  };

  componentDidUpdate() {
    if (this.state.isToggleCart) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }

  handleClickOutside = (event) => {
    if (
      !event.target.closest(".mini_cart") ||
      event.target.matches(".cart-overlay")
    ) {
      this.setState({ isToggleCart: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    // console.log(this.state.isToggleCart, 'toggle');
    return (
      <div>
        <CartContextConsumer>
          {({ cart, getTotalInCartItemsQuantity, getTotalPrice }) => (
            <Div className="mini_cart" >
              <Div className="" onClick={() => this.toggleCart()}>
              <Img src={cartImg} alt="" className="" />

              <Text className="qty">{getTotalInCartItemsQuantity}</Text>
              </Div>
              {this.state.isToggleCart && (
                <>
                  <BackDrop className="cart-overlay"></BackDrop>
                  <Div>
                    {cart.length > 0 ? (
                      <Dropdown >
                        <Div className="dropdownProducts">
                          <Text className="cartHeader">
                            My Bag,{" "}
                            <Span className="cartSpan">
                              {getTotalInCartItemsQuantity} items
                            </Span>
                          </Text>
                          <Div className="products">
                            {cart.map((item, index) => (
                              <CartItemCard
                                key={index}
                                product={item?.data?.product}
                                index={index}
                                cart={cart}
                              />
                            ))}
                          </Div>
                          <Div className="total-price-div">
                            <Text className="total_price_head">Total</Text>
                            <CurrencyContextConsumer>
                              {({ currencyIndex }) => (
                                <Text className="total_price">
                                  {getTotalPrice(currencyIndex)}
                                </Text>
                              )}
                            </CurrencyContextConsumer>
                          </Div>
                          <Div>
                            <Button
                              className="viewBag"
                              onClick={() => this.goToCart()}
                            >
                              view bag
                            </Button>
                            <Button className="checkout">checkout</Button>
                          </Div>
                        </Div>
                      </Dropdown>
                    ) : (
                      <>
                      <BackDrop></BackDrop>
                      <Div className="emptyCart">Your cart is empty</Div>

                      </>
                    )}
                  </Div>
                </>
              )}
            </Div>
          )}
        </CartContextConsumer>
      </div>
    );
  }
}

export default withRouter(CartComponent);
