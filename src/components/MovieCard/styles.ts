import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 20rem;
  max-width: 25rem;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`

export const MovieName = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: #ccc;
`

export const Genres = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #888;

  p,
  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
  svg {
    margin: 0 0.3rem 0 auto;
  }
`
