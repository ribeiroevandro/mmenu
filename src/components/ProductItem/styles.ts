import styled, { css } from 'styled-components';
import { ProductItemProps } from '.';

interface Props {
  modal?: boolean;
  onClick?: () => void;
  update?(item: ProductItemProps): void

}

const modalOpen = css`
  display: grid;
  div {
    p {
      order: 2;
      color: red;
    }
  }

  figure {
    order: 1;
    background-color: pink;
    width: 100%;
  }
`;
const modalClosed = css`
  cursor: pointer;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);

  border: 1px solid rgba(63, 61, 86, 0.75);
  transition: all 0.2s;

  &:hover {
    -webkit-box-shadow: -1px 1px 10px 5px rgba(63, 61, 86, 0.75);
    -moz-box-shadow: -1px 1px 10px 5px rgba(63, 61, 86, 0.75);
    box-shadow: -1px 1px 10px 5px rgba(63, 61, 86, 0.75);
  }
`;

export const Container = styled.article<Props>`
  border-radius: 8px;
  padding: 24px;
  display: flex;
  justify-content: space-between;

  div {
    /* background-color: #fff; */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  figure {
    width: 146px;
    /* height: 150px; */
    align-self: center;

    img {
      width: 100%;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;

      li:not(:first-child) {
        margin-left: 10px;
      }
    }
  }

  ${({ modal }) => !modal ? modalClosed : modalOpen}
`;
