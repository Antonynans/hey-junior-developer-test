import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cart from "./assets/cart.svg";
import { request } from "graphql-request";
import { GET_CATEGORIES, GET_PRICES } from "../gql/Query";
import withRouter from "./pages/withRouter";
import CartComponent from "./cartComponent";
import CurrencyDropDown from "./currencyDropDown";
import { color1 } from "./addToCartStyle";


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
  /* border-bottom: 1px solid green; */
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
  /* position: absolute;
  top: 10px;
  right: 20px; */
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
        <svg
          width="33"
          height="31"
          viewBox="0 0 33 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          onClick={() => this.props.history.push("/")}
        >
          <path
            d="M30.0222 23.6646C30.0494 23.983 29.8009 24.2566 29.4846 24.2566H3.46924C3.15373 24.2566 2.90553 23.9843 2.93156 23.6665L4.7959 0.912269C4.8191 0.629618 5.05287 0.412109 5.33372 0.412109H27.5426C27.8226 0.412109 28.0561 0.628527 28.0801 0.910361L30.0222 23.6646Z"
            fill="#1DCF65"
          />
          <path
            d="M32.0988 29.6014C32.1313 29.9985 31.8211 30.339 31.4268 30.339H1.59438C1.2009 30.339 0.890922 30.0002 0.922082 29.6037L3.06376 2.34717C3.09168 1.9927 3.38426 1.71973 3.73606 1.71973H29.1958C29.5468 1.71973 29.8391 1.99161 29.868 2.34499L32.0988 29.6014Z"
            fill="url(#paint0_linear_150_362)"
          />
          <path
            d="M15.9232 21.6953C12.0402 21.6953 8.88135 17.8631 8.88135 13.1528C8.88135 12.9075 9.07815 12.7085 9.32109 12.7085C9.56403 12.7085 9.76084 12.9073 9.76084 13.1528C9.76084 17.3732 12.5253 20.8067 15.9234 20.8067C19.3214 20.8067 22.0859 17.3732 22.0859 13.1528C22.0859 12.9075 22.2827 12.7085 22.5257 12.7085C22.7686 12.7085 22.9654 12.9073 22.9654 13.1528C22.9653 17.8631 19.8062 21.6953 15.9232 21.6953Z"
            fill="white"
          />
          <path
            d="M20.2581 13.0337C20.1456 13.0337 20.0331 12.9904 19.9471 12.9036C19.7754 12.7301 19.7754 12.4488 19.9471 12.2753L22.226 9.97292C22.3084 9.88966 22.4203 9.84277 22.5369 9.84277C22.6536 9.84277 22.7654 9.88952 22.8479 9.97292L25.1045 12.2529C25.2762 12.4264 25.2762 12.7077 25.1045 12.8812C24.9327 13.0546 24.6543 13.0547 24.4826 12.8812L22.5368 10.9155L20.569 12.9036C20.4831 12.9904 20.3706 13.0337 20.2581 13.0337Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_150_362"
              x1="25.8733"
              y1="26.3337"
              x2="7.51325"
              y2="4.9008"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#52D67A" />
              <stop offset="1" stopColor="#5AEE87" />
            </linearGradient>
          </defs>
        </svg>

        <MainNav display={this.state.displayNav}>
          <CurrencyDropDown prices={this.state.priceData?.currencies} />
          <NavLi>
            <Div>
              {/* <Img src={cart} alt="" className="" /> */}
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
