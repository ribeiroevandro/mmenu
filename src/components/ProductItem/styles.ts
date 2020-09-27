import styled from 'styled-components';

export const Container = styled.article`
  background-color: #ccc;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

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
`;
