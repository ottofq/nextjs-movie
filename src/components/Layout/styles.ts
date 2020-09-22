import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 10rem calc(100vw - 35rem) 25rem;
  grid-template-areas: 'actions content playing';
  width: 100vw;
  height: calc(100vh - 5rem);
`
