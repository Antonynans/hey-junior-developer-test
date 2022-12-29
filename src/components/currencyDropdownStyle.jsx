import styled from "styled-components/macro";

export const Div = styled.div`
  &.currency_dropdown {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;
  }
  &.dropDownMenu {
    position: absolute;
    top: 100%;
    right: -25px;
    z-index: 1;
    background-color: #fff;
    width: 114px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    cursor: default;
  }
  &.dropDownItem {
    width: 114px;
    height: 45px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
    &:hover {
      background-color: #eeeeee;
      cursor: pointer;
    }
  }
  &.symbol {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
`;

export const Button = styled.button``;
