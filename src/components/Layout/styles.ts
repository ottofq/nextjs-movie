import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 10rem auto 10rem;
  grid-template-areas:
    '. header .'
    '. content .'
    '. footer .';
  height: 100%;
  width: 100%;
  gap: 1rem;
`

export const Main = styled.main`
  height: 100%;
  width: 100%;
  grid-area: content;
`
