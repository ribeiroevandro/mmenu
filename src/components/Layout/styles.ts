import styled from 'styled-components';

export const Container = styled.main`
  height: 100%;
  padding: 0 var(--space);
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
`;

export const Nav = styled.nav`

  ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
    width: 100%;
    max-width: 1120px;
    justify-content: space-around;

    li {
      padding: 20px;
    }
  }

  a {
    text-decoration: none;
  }
`;
