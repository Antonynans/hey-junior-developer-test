import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { request } from "graphql-request";
import { GET_CATEGORIES } from "../gql/Query";
import withRouter from "./pages/withRouter";
import CartComponent from "./cartComponent";
import CurrencyDropDown from "./currencyDropDown";
import { color1 } from "./addToCartStyle";
import logo from './assets/logo.svg';

const Bar = styled.nav`
  font-size: 18px;
  padding: 0 4rem;

  background: white;

  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;
const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => props.display};
  flex-direction: column;
  padding: 0;
  gap: 2rem;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    height: 100%;
  }
`;
const NavLi = styled.li`
  text-align: center;
  /* margin: auto; */
  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
const NavLinks = styled(NavLink)`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
 
  color: ${color1};
  height: 3rem;
  margin-top: 1rem;
  text-transform: uppercase;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
  &:hover,
  &:focus {
    color: #5ece7b;
    transition: all 0.3s ease;
  }
  &.active {
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
  }
`;

const NavBarToggle = styled.span`
 
  display: flex;
  justify-content: end;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  @media (min-width: 768px) {
    position: absolute;
  }
`;
const Img = styled.img`
  cursor: pointer;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Div = styled.div`
  position: relative;
`;
const Button = styled.button`
  border-radius: 50px;
  border: none;
  outline: none;
  background: blue;
  color: white;
  position: absolute;
  top: -15%;
  left: 50%;
  /* padding: .2rem .3rem; */
`;

const Text = styled.p`
  margin: 0;
`;

const Hamburger = styled.img`
  content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
  @media (min-width: 768px) {
    display: none;
  }
`;
class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayNav: props.displayNav ? "flex" : "none",
      productData: {},
      priceData: {},
    };
  }
  toggleNavBar() {
    this.setState((prevState, props) => {
      switch (prevState.displayNav) {
        case "none":
          return { displayNav: "flex" };
        case "flex":
        default:
          return { displayNav: "none" };
      }
    });
  }

  componentDidMount() {
    const variables = {
      id: this.productIds,
    };

    request({
      url: "http://localhost:4000/",
      document: GET_CATEGORIES,
      variables: variables,
    }).then((data) => {
      this.setState({ productData: data });
    });

   
  }

  render() {

    return (
      <Bar>
        <NavBarToggle onClick={() => this.toggleNavBar()}>
          <Hamburger />
        </NavBarToggle>
        <MainNav display={this.state.displayNav}>
          {this.state.productData.categories?.map(({ name }, i) => (
            <NavLi key={i}>
              <NavLinks to={`/category/${name}`} key={i}>
                {name}
              </NavLinks>
            </NavLi>
          ))}

       
        </MainNav>
        <Link to='/'>
        <img src={logo} alt=''  />
</Link>

        <MainNav display={this.state.displayNav}>
          <CurrencyDropDown prices={this.state.priceData?.currencies} />
          <NavLi>
            <Div>
                {<CartComponent />}
            </Div>
          </NavLi>
        </MainNav>
      </Bar>
    );
  }
}

Navbar.propTypes = {
  displayNav: PropTypes.bool,
};

export default withRouter(Navbar);
