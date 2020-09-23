import styled from 'styled-components'

export const Container = styled.aside`
  height: 100%;
  grid-area: playing;
  padding: 0 1rem;
  background-color: #121212;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #f0ece2;
    margin-bottom: 1rem;
  }
`
