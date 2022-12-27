import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CartContextConsumer } from "../context/cartContext";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { Button, Div, Img, Span, Text } from "../Style";
import cartImg from "./assets/cart.svg";
import CartItemCard from './cardItemCart';

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
    if (!event.target.closest(".mini_cart") || event.target.matches(".overlay"))
    {this.setState({ isToggleCart: false });}
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
            <Div className="mini_cart">
              {console.log('cart', cart, cart.map((item) => item))}
              <Div className="cartContainer" onClick={this.toggleCart}>
                <Img src={cartImg} alt="" className="" />

                <Button className="qty">{getTotalInCartItemsQuantity}</Button>
              </Div>
              {this.state.isToggleCart && (
                <>
                <div></div>
                {cart.length > 0 ? (
                  <Div className="cartContent">
  <Text className="cartHeader">My Bag, <Span className="cartSpan">{getTotalInCartItemsQuantity} items</Span></Text>
  {cart.map((item, index) => (
<CartItemCard key={index} product={item?.data?.product} index={index} cart={cart}

/>

  ))}
  <Text>Total</Text>
  <CurrencyContextConsumer>
    {({ currencyIndex }) => (
      <p>{getTotalPrice(currencyIndex)}</p>
    )}
  </CurrencyContextConsumer>
  <Div>
    <Button className="viewBag" onClick={() => this.goToCart()}>
      view bag
    </Button>
    <Button>checkout</Button>
  </Div>
  
                  </Div>
                ) : (
                  <Text>Your cart is empty</Text>
                )}
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