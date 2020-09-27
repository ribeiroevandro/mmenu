import styled from 'styled-components';

export const Container = styled.section`
  background-color: #ccc;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--screen-lg);
  padding: var(--space);

  display: grid;
  grid-column-gap: var(--space);
  grid-row-gap: var(--space);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
