import React, { Component } from "react";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { Button, Div, Text } from "../Style";

export default class CartFooter extends Component {
  render() {
    const { quantity, total } = this.props;

    return (
      <CurrencyContextConsumer>
        {({ currencyIndex }) => (
          <>
            <Div className="cart_footer_container">
              <Div className="tax_div">
                <Text className="footer_head"> Tax 21%: </Text>
                <Text className="footer_span">
                  {total(currencyIndex).slice(0, 1)}
                  {(total(currencyIndex).slice(1) * 0.21).toFixed(2)}
                </Text>
              </Div>
              <Div className="tax_div">
                <Text className="footer_head"> Quantity: </Text>
                <Text className="footer_span"> {quantity} </Text>
              </Div>
              <Div className="tax_div">
                <Text className="footer_head"> Total: </Text>
                <Text className="footer_span"> {total(currencyIndex)} </Text>
              </Div>
            </Div>
            <Button className="footerBtn"> ORDER </Button>
          </>
        )}
      </CurrencyContextConsumer>
    );
  }
}
