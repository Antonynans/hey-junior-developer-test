import styled from "styled-components/macro";

export const Button = styled.button`
&.qty {
  border-radius: 50px;
  border: none;
  outline: none;
  background: #1d1f22;
  color: white;
  position: absolute;
  top: -.1rem;
  left: 50%;
  font-size: 14px;
  width: 20px;
  height: 20px;
  padding: 0;
}
  
  /* padding: .2rem .3rem; */
  &.viewBag {

  }
`;

export const Img = styled.img`
&.cart-img {
  width: 121px;
  height: 190px;
}
  /* cursor: pointer; */
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Div = styled.div`
  &.cartContainer {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: end;
    height: 2rem;
  }
  &.cartContent {
    position: absolute;
    width: 20rem;
    right: 0;
  }
  &.cartComponent {
    display: flex;
  }
  &.cartPrice {
    font-weight: 500;
  }
`;

export const Text = styled.p`
&.cartHeader {
  font-weight: 700;
}
&.cartText {
  font-weight: 300;

}
&.totalCart {
  font-weight: 500;
  font: Roboto;
}
`;

export const Span = styled.span`
&.cartSpan {
  font-weight: 500;
}
`;
