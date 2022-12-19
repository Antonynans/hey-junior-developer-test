import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class CartContextProvider extends Component {
  state = {
    cart: localStorage.getItem("cart") ? (JSON.parse(localStorage.getItem("cart"))).cart : [],
  };

  getTotalInCartItemsQuantity = () => {
    let sum = 0;
    this.state.cart.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  }

  isItemInCart = (id, attributes) => {
    if (this.state.cart.find(element => (JSON.stringify(element.attributes) === JSON.stringify(attributes.attributes) && element.id === id))) {
       
        return "In cart"
    }
    else {
        return "Add to cart"
    }
  }
  addToCart = (product) => {
    if (
      this.state.cart.some(
        (element) =>
          JSON.stringify(element.attributes) ===
          JSON.stringify(product.attributes) && element.id === product.id
      )
    ) {
       this.changeProductQuantity(product, 1)

    } else {
      this.setState({ cart: [...this.state.cart, product] });
    }
  };

  getTotalPrice = (selectedCurrencyIndex) => {
    let sum = 0;
    let symbol = "";
      this.state.cart.forEach((item) => {
      sum += item.data.product.prices[selectedCurrencyIndex || 0].amount * item.quantity;
      symbol = item.data.product.prices[selectedCurrencyIndex || 0].currency.symbol;
    });
    return symbol + sum.toFixed(2);
  };

  // changeProductQuantity = (product, quantity) => {
  //   const productToUpdate = this.state.cart.find(
  //     (element) =>
  //       JSON.stringify(element.attributes) ===
  //       JSON.stringify(product.attributes)
  //   );

  //   let quant = (productToUpdate.quantity += quantity);
  //   productToUpdate.quantity = quant;

  //   this.setState(prev => (
  //     {...prev}
  //   ))
  // }
  updateCart = (id, isDecrease) => {
    const isExist = this.state.cart?.find((item) => item.id === id)
    if (!isExist) {
      return false
    }

    if (isExist.quantity === 1 && isDecrease) {
      return this.state.cart?.filter(obj => {
        return obj.id !== id
      })
    }

    return this.state.cart?.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          quantity: isDecrease ? isExist.quantity - 1 : isExist.quantity + 1,
        }
      }
      return obj
    })
  }

  increase = (id) => {
    const newCart = this.updateCart(id)
    if (newCart) {
      this.setState({cart: newCart})
    } else {
      const product = { quantity: 1, id: id }
      this.setState(prev => (prev ? [...prev, product] : [product]))
    }
  }

  decrease = (id) => {
    const newCart = this.updateCart(id, true)
    if (newCart) {
      this.setState({cart: newCart})
    }
  }

  removeFromCart = (id, attributes) => {
   
      // const newCartItems = this.state.cart?.filter((item) => item.id !== id || item?.attributes !== attributes);
      // this.setState({ cart: newCartItems});
    
    this.setState({
      cart: this.state.cart?.filter((item) => JSON.stringify(item?.attributes) !== JSON.stringify(attributes) || item?.id !== id),
    });
  };

  render() {
    localStorage.setItem("cart", [JSON.stringify({cart: this.state.cart})]);
    return (
      <Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          isItemInCart: this.isItemInCart,
          changeProductQuantity: this.changeProductQuantity,
          getTotalInCartItemsQuantity: this.getTotalInCartItemsQuantity(),
          getTotalPrice: this.getTotalPrice,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CartContextProvider, Consumer as CartContextConsumer };
