import styled from "styled-components/macro";

export const color1 = '#1D1F22';
export const btnColor = '#5ECE7B';

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
  }
  &.cart-item {
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
  &.attr-container {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: baseline;
  };
  &.attr-div {
    display: flex;
    /* gap: 1rem; */
    justify-content: space-between;
    width: 100%;
  }
  &.gallery-div {
    display: flex;
  }
  &.arrowImg {
    position: relative;
  }
  &.arrowBtnDiv {
    position: absolute;
    bottom: 0;
  }
  &.increaseDiv {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }
`;

export const Divs = styled.div`
border: 1px solid ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
    width: auto;
    min-width: 16px;
    height: 16px;
    padding: .2rem;
    /* outline: ${({ name, value, currentAttributes }) =>
		currentAttributes.some(
			currentAttribute => Object.keys(currentAttribute)[0] === name && Object.values(currentAttribute)[0] === value,
		) && "1px solid var(--accent-color)"}; */


    &.selected-div {
      background: ${color1};
      color: white;
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
  width: 121px;
  height: 190px;
}
  /* cursor: pointer; */
  @media (min-width: 768px) {
    width: 100%;
  }
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
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top: 1.5rem;
  
}
&.desc {
  font-family: 'Roboto', sans-serif;
}
`;

export const Button = styled.button`
&.increaseBtn {
   width: 24px;
    height: 24px;
    font-size: 15px;
font-weight: 600;
  /* height: 3.25rem; */
  cursor: pointer;
  border: none;
  outline: none;
  /* width: 100%; */
  margin-bottom: 3rem;
}
     
  &.arrowBtn {

  }
`;
