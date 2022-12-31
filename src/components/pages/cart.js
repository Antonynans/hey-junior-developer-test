import React, { Component } from 'react'
import { CartContextConsumer } from '../../context/cartContext'
import Navbar from '../navbar'
import { Div, H1 } from './cartstyle'
import CartItemCard from "../cardItemCart";
import CartFooter from '../cart_footer';


export default class cart extends Component {
  render() {
    return (
      <>
                <Navbar />
                <Div className='container'>
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
                // <StyledEmptyCartContainer>
                //   <span> Your cart is empty &nbsp; (´。＿。｀)</span>
                //   <Link to="/">
                //     <StyledShopNowBtn> Shop now </StyledShopNowBtn>
                //   </Link>
                // </StyledEmptyCartContainer>
                ''
              )}
            </>
          )}
        </CartContextConsumer>
</Div>
      </>
    )
  }
}
