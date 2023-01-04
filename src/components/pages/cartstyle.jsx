import styled from "styled-components/macro";
import { btnColor } from "../addToCartStyle";

export const H1 = styled.h1``;

export const Div = styled.div`
  &.container {
    padding: 2rem 4rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding-top: 5rem;
  }
  &.emptyCart {
    display: flex;
    flex-flow: column;
  }
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 24px;
`;

export const Button = styled.button`
  height: 3.25rem;
  padding: 0 4rem;
  border: none;
  background-color: ${btnColor};
  color: white;
  cursor: pointer;
  margin-top: 2rem;
`;
