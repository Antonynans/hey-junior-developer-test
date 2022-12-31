import React, { Component } from "react";
import { CartContextConsumer } from "../../context/cartContext";
import Navbar from "../navbar";
import { Button, Div, H1, Span } from "./cartstyle";
import CartItemCard from "../cardItemCart";
import CartFooter from "../cart_footer";
import { Link } from "react-router-dom";

export default class cart extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Div className="container">
          <H1>Cart</H1>

          <CartContextConsumer>
            {({ cart, getTotalInCartItemsQuantity, getTotalPrice }) => (
              <>
                {getTotalInCartItemsQuantity > 0 ? (
                  <>
                    {cart.map((product, index) => (
                      <CartItemCard
                        cartPage
                        key={index}
                        product={product}
                        index={index}
                        cart={cart}
                      />
                    ))}

                    <CartFooter
                      quantity={getTotalInCartItemsQuantity}
                      total={getTotalPrice}
                    />
                  </>
                ) : (
                  <Div className="emptyCart">
                    <Span> Your cart is empty </Span>
                    <Link to="/">
                      <Button> Shop now </Button>
                    </Link>
                  </Div>
                )}
              </>
            )}
          </CartContextConsumer>
        </Div>
      </>
    );
  }
}
