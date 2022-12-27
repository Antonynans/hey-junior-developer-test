import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { CartContextConsumer } from '../context/cartContext';
import { CurrencyContextConsumer } from '../context/currencyContext';
import { Div, Img, Text } from '../Style';

class CartItemCard extends Component {
  state = {
    addToCartBadgeVisible: false,
  };

  handleMouseOver = () => {
    this.setState({ addToCartBadgeVisible: true });
  };

  handleMouseOut = () => {
    this.setState({ addToCartBadgeVisible: false });
  };

  render() {
    const { id, name, brand, inStock, category, gallery, attributes, prices } = this.props?.product;

    const attr = this.props?.product.attributes?.map((attribute) => ({
      [attribute?.name]: attribute?.items[0]?.displayValue,
    }));

    const defaultAttributesObj = Object.assign({}, ...attr);
// console.log(name, 'name', 'product', this.props);
    return (
      <div>
        <div
        onClick={(e) =>
          e.target.id !== "add-to-cart-btn" &&
          e.target.id !== "cart-icon" &&
          this.props.history.push("/" + this.props.data?.category + "/" + id)
        }
        available={inStock}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <div available={inStock}>
          {!inStock || !this.state.addToCartBadgeVisible ? null : (
            <CartContextConsumer>
              {({ addToCart }) => (
                <div
                  id="add-to-cart-btn"
                  onClick={() => {
                    addToCart({
                      data: this.props?.data,
                      quantity: 1,
                      id: id,
                      attributes: defaultAttributesObj,
                    });
                    // this.addedToCartAnimation();
                  }}
                >
                  {/* <img id="cart-icon" src={emptyCartIcon} alt="" /> */}
                </div>
              )}
            </CartContextConsumer>
          )}
          <Div className='cartComponent'>
            <Div>
          <Text className='cartText'>{brand}</Text>
          <Text> {name}</Text>
          <CurrencyContextConsumer>
          {({ currencyIndex }) => (
            <Div className='cartPrice'>
              {prices[currencyIndex].currency.symbol}
              {prices[currencyIndex].amount}
            </Div>
          )}
        </CurrencyContextConsumer>

          </Div>
          <Img src={gallery[0]} alt={name} className='cart-img' />

          </Div>
        </div>
        
      </div>
      </div>
    )
  }
}

export default withRouter(CartItemCard);