import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { CartContextConsumer } from '../context/cartContext';
import { CurrencyContextConsumer } from '../context/currencyContext';
import { Button, Div, Divs, Img, Text } from './addToCartStyle';

class CartItemCard extends Component {
  state = {
    galleryIndex: 0,
  };

changeGalleryIndex = (index) => {
  this.setState({ galleryIndex: this.state.galleryIndex + index + this.props.product?.gallery.length} % this.props.product.gallery.length)
}



  render() {
    const { id, name, brand, prices, inStock, gallery, attributes } = this.props?.product;

    // const attr = this.props?.product.attributes?.map((attribute) => ({
    //   [attribute?.name]: attribute?.items[0]?.displayValue,
    // }));
    const { cartPage } = this.props;

    // const defaultAttributesObj = Object.assign({}, ...attr);
console.log(id, 'product', this.props.product.id);

    return (
      <CartContextConsumer>
        {({ increase, decrease }) => (
          <Div className='cartItemComponent'>
<Div className='cart-item'>
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
        {attributes?.map((item) => (
                <Div key={item.name} className='attr-container'>
                  {/* <div> */}
                  <Text className="title-desc">{item.name}:</Text>
                  {item.type !== "swatch" ? 

                  <Div className="attr-div">
                    {item.items.map((val) => (
                      
                        <Divs key={val.value}                  
                          className={
                            // val.value === this.state.size
                            //   ? "small-div selected-div"
                            //   : "small-div"
                            Object.values(attributes)[Object.keys(attributes).indexOf(item.name)] === val.displayValue ? "selected-div" : ""
                          }
                          // bgColor={item.type === "swatch" ? val.value : ''}
                          currentAttributes={attributes[0]}
                          name={item.name}
                          value={val.value}
                        >
                          {item.id === 'Color' ? '' : val.value}
                          {/* {console.log('log', val, Object.keys(attributes).map((items) => [items.name]) === val.displayValue)}
{console.log(Object.keys(this.props.cart.map((itemss) => itemss.attributes)[0]) === item.name, item.name, 'cartss')} */}
                        </Divs>
                    ))}
                  </Div>
                  : 
                  <Div className='attr-div'>
                    {
                      item.items.map((val) => (
                        <Divs key={val.value} 
                        className={
                                                      Object.values(attributes)[Object.keys(attributes).indexOf(item.name)] === val.displayValue ? "selected" : ""
                        }
                        bgColor={item.type === "swatch" ? val.value : ''}>
                        
                        </Divs>
                                          ))
                    }
                  </Div>
                  }
                </Div>
              ))}
              {/* <Button onClick={() => changeProductQuantity(this.props.product, 1)}>+</Button>
              <Text>{this.props.cart[this.props.index].quantity}</Text> */}
              {/* <Button onClick={this.props.cart[this.props.index].quantity > 1 ? changeProductQuantity(this.props.product, -1) : removeFromCart(id, attributes)}>-</Button> */}
              </Div>
              <Div className='gallery-div'>
                <Div className='increaseDiv'>
                <Button className='increaseBtn' onClick={() => increase(this.props.product.id)}>+</Button>
              <Text>{this.props.cart[this.props.index].quantity}</Text>
              {/* {console.log(this.props.cart[this.props.index].quantity, 'cartssas')} */}
              <Button onClick={() => decrease(this.props.product.id)}>-</Button>
                </Div>
              <Div className='arrowImg'>
                <Img src={gallery[this.state.galleryIndex]} alt='' className='cart-img' />
                {!this.props.cartPage || gallery.length < 2 ? null : (
                  <Div className='arrowBtnDiv'>
                    <Button className='arrowBtn' onClick={() => this.changeGalleryIndex(1)}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 4.06857L5.625 9.6876L11.25 15.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </Button>
                    <Button onClick={() => this.changeGalleryIndex(-1)}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 4.06857L12.375 9.6876L6.75 15.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </Button>
                  </Div>
                )}
              </Div>
</Div>
          </Div>
        )}
        {/* <div
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
                  }}
                >
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
        
      </div> */}
      </CartContextConsumer>
    )
  }
}

export default withRouter(CartItemCard);