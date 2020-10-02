import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;

  a {
    color: inherit;
  }

  hr {
    border: none;
    height: 1px;
    color: #333;
    background-color: #333;
    margin: 0 0 1rem 0;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #f0ece2;
`

export const ActionsContainer = styled.div`
  button {
    cursor: pointer;
    color: #888;
    transition: color 0.2s;

    &:hover {
      color: #f0ece2;
    }
  }
`
