import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import cart from "./components/pages/cart";
import Main from "./components/pages/Cateogry";
import Products from "./components/pages/Products";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/category/:categoryId" component={Main} />
          <Route path="/category/:categoryId" component={Main} />

          <Route path="/product/:productId" component={Products} />
          <Route path="/cart" component={cart} />

          <Redirect from="*" to="/category/all" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
