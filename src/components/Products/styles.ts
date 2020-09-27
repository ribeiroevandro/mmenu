import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-column-gap: var(--space);
  grid-row-gap: var(--space);
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
`;
