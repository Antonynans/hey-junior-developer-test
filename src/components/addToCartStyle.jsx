import styled from "styled-components/macro";

export const color1 = "#1D1F22";
export const btnColor = "#5ECE7B";

export const Div = styled.div`
  &.container {
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
  }
  &.small-images-container {
    display: flex;
    flex-flow: column;
    gap: 2rem;
    padding-right: 2rem;
  }
  &.image-container {
    @media screen and (max-width: 375px) {
      display: flex;
      justify-content: center;
    }
  }
  &.image-detail-desc {
    display: flex;
    width: 60%;
  }
  &.product-detail-desc {
    /* display: flex; */
    width: 40%;
  }
  &.small-div {
    width: 63px;
    height: 45px;
    /* padding: 0 1rem; */
    border: 1px solid ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
    cursor: pointer;

    &:hover {
      /* background-color: black; */
      border: 1px solid ${color1};
      background-color: ${({ bgColor }) => (bgColor ? bgColor : color1)};

      color: white;
    }
    /* &:active {
      background: ${color1};
      color: white;
    } */
  }
  &.selected-div {
    background: ${color1};
    color: white;
  }
  &.size-div {
    display: flex;
    gap: 0.2rem;
  }
  &.price-div {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    flex-wrap: wrap;
  }
  &.price-sub-div {
    display: flex;
    gap: 0.2rem;
    font-weight: 700;
    font-size: 24px;
  }
  &.cartItemDiv {
    width: 293px;
    height: 538px;
    margin-bottom: 32px;
  }
  &.cartItemComponent {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    ${({ isOnCartPage }) =>
      isOnCartPage ? ` border-top: 1px solid #e5e5e5;` : ``}
  }
  &.cart-item {
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;`
        : `
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width: 50%;`}
  }
  &.attr-container {
    /* width: 100%; */
    display: flex;
    flex-flow: column;
    align-items: baseline;
  }
  &.attr-div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${({ isOnCartPage }) => (isOnCartPage ? ` gap: 1rem;` : `gap: .5rem`)}
  }
  &.gallery-div {
    display: flex;
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? ` gap: 1rem;     height: 288px;
`
        : `height: 190px;
`}
  }
  &.arrowImg {
    position: relative;
  }
  &.arrowBtnDiv {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
  }
  &.increaseDiv {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }
  &.inputContainer {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1.5em 2em;
  }
`;

export const Divs = styled.div`
  border: 1px solid ${color1};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  width: auto;

  ${({ isOnCartPage }) =>
    isOnCartPage
      ? `min-width: 63px;
    height: 45px;
    font-size: 16px;
`
      : `
  min-width: 16px;
  height: 16px;
  padding: 0.2rem;`}

  &.selected-div {
    background: ${color1};
    color: white;
  }
  &.selected {
    border: 3px solid ${color1};
    opacity: 0.5;
    /* color: white; */
  }
`;

export const Img = styled.img`
  &.small-image {
    border-radius: 3px;
    background-color: #ebebeb;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
  &.selected-image {
    background-color: #f02d34;
  }
  &.product-detail-image {
    border-radius: 3px;
    background-color: #ebebeb;
    object-fit: cover;

    width: 100%;
    height: 40rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  &.cart-img {
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `    width: 200px;
    height: 288px;`
        : ` width: 121px;
  height: 190px;`}
`;

export const Text = styled.p`
  margin: 0;

  &.product-title {
    font-weight: 600;
    font-size: 30px;
  }
  &.sub-title {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
  &.title-desc {
    font-family: "Roboto", sans-serif;
    padding-bottom: 0.5rem;
    margin-top: 1.5rem;
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? ` font-weight: 700;
    font-size: 18px;`
        : `font-size: 14px; `}
  }
  &.title {
    font-weight: 700;
    font-size: 18px;
  }
  &.desc {
    font-family: "Roboto", sans-serif;
  }
  &.cartText {
    cursor: pointer;
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `font-weight: 600;
    font-size: 30px;
    padding: 1rem 0 .5rem;`
        : `font-weight: 300;
    font-size: 16px;
    display: flex;`}
  }
  &.cartName {
    cursor: pointer;
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `font-weight: 400;
    font-size: 30px;
    padding-bottom: .5rem;`
        : `font-size: 16px;
        display: flex;
        padding: 0.5rem 0;
`}
  }
  &.cartPrice {
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `font-weight: 700;
    font-size: 24px;
    `
        : ""}
  }
`;

export const Button = styled.button`
  &.addCartBtn {
    width: 60%;
    margin-bottom: 40px;
    height: 3.25rem;
    font-weight: 600;
    border: none;
    background-color: ${btnColor};
    color: #fff;
    cursor: pointer;
    font-family: "Raleway";
    font-size: 16px;

    :disabled {
      opacity: 0.5;
    }
  }
  &.increaseBtn {
    ${({ isOnCartPage }) =>
      isOnCartPage
        ? `
        width: 45px;
    height: 45px;
    font-size: 20px;
    font-weight: 600;

    cursor: pointer;
    border: none;
    outline: none;`
        : ` width: 24px;
    height: 24px;
    font-size: 15px;
    font-weight: 600;

    cursor: pointer;
    border: none;
    outline: none;`}
  }

  &.arrowBtn {
    background: ${color1};
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export const Label = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-weight: 400;
  font-family: "Source Sans Pro";
  background: ${(props) => props.color || "white"};
  border: ${(props) =>
    props.isSwatch
      ? "1px solid black"
      : props.color === "White"
      ? "1px solid black"
      : "none"};
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  ${({ isSwatch }) =>
    isSwatch
      ? `
  &:checked + ${Label}  {
    background: black;
    color: white;
  }
  `
      : `
  &:checked + ${Label} {
    outline: 1px solid #5ECE7B;
    outline-offset: 1px;
  }
`}
`;
