import styled from "styled-components/macro";
import { btnColor, color1 } from "./components/addToCartStyle";

export const Button = styled.button`
  
  &.qty {
    border-radius: 50px;
    border: none;
    outline: none;
    background: #1d1f22;
    color: white;
    position: absolute;
    font-family: "Roboto";
    bottom: 50%;
    left: 50%;
    font-size: 14px;
    font-weight: 700;
    width: 20px;
    height: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* padding: .2rem .3rem; */
  &.viewBag {
    margin-right: 12px;
    width: 140px;
    height: 43px;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    line-height: 43px;
    border: 1px solid ${color1};
    background-color: white;
    cursor: pointer;
}
&.checkout {
  width: 140px;
    height: 43px;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.8px;
    color: white;
    background-color: ${btnColor};
    border: none;
    cursor: pointer;

}
  
`;

export const Img = styled.img``;

export const Div = styled.div`
  &.mini_cart {
    cursor: pointer;
    position: relative;
  }
  &.cartContent {
    position: absolute;
    top: 100%;
    right: -25px;
    z-index: 1000;
    background-color: #fff;
    width: 325px;
    height: 677px;
    margin-top: 29px;
    padding: 32px 16px;
    cursor: default;

    width: 293px;
    height: 538px;
    margin-bottom: 32px;
  }
  &.dropdownProducts {
    /* width: 293px; */
    height: 538px;
    margin-bottom: 32px;
  }

  &.cartComponent {
    display: flex;
  }
  &.cartPrice {
    font-weight: 500;
  }
  &.products {
    margin-bottom: 32px;
	/* width: 293px; */
	height: 420px;
	contain: content;
	display: block;
	list-style-type: none;
	overflow: auto;
	::-webkit-scrollbar {
		display: none;
	}
  }
  &.total-price-div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`;

export const Text = styled.p`
  &.cartHeader {
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
  }
  &.cartText {
    font-weight: 300;
  }
  &.totalCart {
    font-weight: 500;
    font: Roboto;
  }
  &.total_price_head {
    font: Roboto;
  }
 &.total_price {
  font-weight: 700;

 }
 &.qty {
    border-radius: 50px;
    border: none;
    outline: none;
    background: #1d1f22;
    color: white;
    position: absolute;
    font-family: "Roboto";
    bottom: 50%;
    left: 50%;
    font-size: 14px;
    font-weight: 700;
    width: 20px;
    height: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const Span = styled.span`
  &.cartSpan {
    font-weight: 500;
    margin-left: 5px;
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin-top: 70px;
  background: rgba(57, 55, 72, 0.22);
  z-index: 1;
  cursor: default;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: -25px;
  z-index: 1;
  background-color: #fff;
  width: 325px;
  height: 677px;
  margin-top: 20px;
  padding: 32px 16px;
  cursor: default;
`;
