import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  grid-area: header;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 16rem;

  a {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    color: #f0ece2;
  }

  svg {
    height: 100%;
    width: 3rem;
    color: #f0ece2;
    margin-right: 0.5rem;
  }
`

export const ActionsContainer = styled.nav`
  ul {
    display: flex;
    height: 100%;
    width: 10rem;
    color: #f0ece2;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    li {
      a {
        color: inherit;
      }
    }
  }
`
