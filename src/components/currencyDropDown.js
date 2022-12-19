import React, { Component } from "react";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { Button, Div } from "./currencyDropdownStyle";

export default class CurrencyDropDown extends Component {
  state = {
    isOptionOpen: false,
    currentCurrency: localStorage.getItem("currencyIndex") || 0,
    currencies: this.props.prices,
  };

  toggleOverlayVisibility = () => {
    this.setState({ isOptionOpen: !this.state.isOptionOpen });
  };

  changeCurrency = (index) => {
    this.setState({ currentCurrency: index });
    this.toggleOverlayVisibility();
  };

  handleClickOutside = (event) => {
    if (!event.target.closest(".currency_dropdown")) {
      this.setState({ isOptionOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
   
    return (
      <CurrencyContextConsumer>
        {(context) => (
          <Div className="currency_dropdown">
            <Button onClick={this.toggleOverlayVisibility}>
              <span>
                {/* {this.state.currencies[this.state.currentCurrency].symbol} */}
              </span>
              {this.state.isOptionOpen ? (
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5L4 0.5L7 3.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0.5L4 3.5L7 0.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Button>
            {this.state.isOptionOpen && (
              <Div>
                {this.state.currencies.map((currency, index) => (
                  <Div
                    key={index}
                    onClick={() => {
                      context.changeCurrency(index);
                      this.changeCurrency(index);
                    }}
                  >
                    {currency.symbol} {currency.label}
                  </Div>
                ))}
              </Div>
            )}
          </Div>
        )}
      </CurrencyContextConsumer>
    );
  }
}
