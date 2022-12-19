import React, { Component } from "react";
import { CartContextConsumer } from "../context/cartContext";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { Button, Div, Text } from "./addToCartStyle";

export default class AddToCartForm extends Component {
  state = {};

  handleFormOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   handleSubmitForm = (e) => {
  // <CartContextConsumer>
  // {(context) => (
  // context.addToCart({data})
  // )}
  // </CartContextConsumer>
  //   }
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
                  {/* <div> */}
                  <Text className="title-desc">{item.name}:</Text>

                  <Div className="size-div">
                    {item.items.map((val) => (
                      // <input type="radio"
                      //   key={val.value}
                      //   className={
                      //     val.value === this.state.size
                      //       ? "small-div selected-div"
                      //       : "small-div"
                      //   }
                      //   bgColor={item.type === "swatch" ? val.value : ""}
                      //   // onMouseEnter={() =>
                      //   //   this.setState({ [item.name]: val.value })
                          
                      //   // }
                      //   onChange={this.handleFormOnChange}
                      //   name={item?.name}
                      //   value={val?.displayValue}
                      
                      //   // {item.id === "Color" ? "" : val.value}
                      // />
                        <Div key={val.value}                  
                          className={
                            val.value ===  this.state.Color
                              ? "small-div selected-div"
                              : "small-div" 
                              
                          }
                          // className='small-div'
                          bgColor={item.type === "swatch" ? val.value : ''}
                          onMouseEnter={() => this.setState({ [item.name]: val.value })}
                          // onClick={() => this.setState({ [item.name]: val.value })}
                        >
                          {item.id === 'Color' ? '' : val.value}
                          {console.log(this.state)}
                        </Div>
                    ))}
                  </Div>
                </Div>
              ))}
              {/* <Div> */}
                <CurrencyContextConsumer>
                  {({currencyIndex}) => (
                    <>
                                  <Text className="title-desc">PRICE:</Text>
                                  <Div className="price-div">
                                  <Div className="price-sub-div">
                                     {productProps?.prices[currencyIndex].currency.symbol}
                      {productProps?.prices[currencyIndex].amount}
                                  </Div>
                                  </Div>


                     
                    </>
                  )}
                </CurrencyContextConsumer>
              {/* </Div> */}
              <CartContextConsumer>
                {(context) => (
 <Button content={this.ctaBtn.innerHTML}
  disabled={!productProps?.inStock}
            								
            >{productProps?.inStock ? context?.isItemInCart(this.props.data.product.id, {attributes: this.state}) : 'Out of stock'}</Button>
                )}
              </CartContextConsumer>
             

            </form>
          )}
        </CartContextConsumer>
      </>
    );
  }
}
