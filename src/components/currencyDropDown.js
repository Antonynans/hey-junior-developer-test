import React, { Component } from "react";
import { CurrencyContextConsumer } from "../context/currencyContext";
import { Button, Div } from "./currencyDropdownStyle";
import { request } from "graphql-request";
import { GET_PRICES } from "../gql/Query";

export default class CurrencyDropDown extends Component {
  state = {
    isOptionOpen: false,
    currentCurrency: localStorage.getItem("currencyIndex") || 0,
    currencies: [],
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
    this.fetchPriceData();
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  fetchPriceData() {
    request({
      url: "http://localhost:4000/",
      document: GET_PRICES,
    }).then((data) => {
      this.setState({
        currencies: [...data.currencies],
      });
    });
  }

  render() {
    return (
      <CurrencyContextConsumer>
        {(context) => (
          <Div className="currency_dropdown">
            <Div className="symbol" onClick={this.toggleOverlayVisibility}>
              <span>
                {this.state.currencies[this.state.currentCurrency]?.symbol}
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
            </Div>
            {this.state.isOptionOpen && (
              <>
                <Div className="dropDownMenu">
                  {this.state.currencies?.map((currency, index) => (
                    <Div
                      key={index}
                      onClick={() => {
                        context.changeCurrency(index);
                        this.changeCurrency(index);
                      }}
                      className="dropDownItem"
                    >
                      {currency.symbol} {currency.label}
                    </Div>
                  ))}
                </Div>
              </>
            )}
          </Div>
        )}
      </CurrencyContextConsumer>
    );
  }
}
