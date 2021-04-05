import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 15rem;
  width: 100%;
  /* border: 1px solid #888; */
  border-radius: 0.4rem;
`

export const Image = styled.img`
  height: 15rem;
  width: 20rem;
  padding: 1rem;
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  gap: 0.5rem;
`

export const Title = styled.a`
  font-size: 2.4rem;
  font-weight: bold;
  cursor: pointer;
  display: block;
`
export const Genres = styled.p`
  font-size: 1.6rem;
`

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
  text-align: justify;
`
export const Button = styled.button`
  align-self: center;
  height: 10rem;
  color: #888;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #f0ece2;
  }
`
