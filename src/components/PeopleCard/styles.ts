import styled from 'styled-components'

export const Container = styled.div`
  width: 13.4rem;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`

export const Image = styled.img`
  height: 17.5rem;
  width: 13.4rem;
`

export const Name = styled.p`
  padding: 0.5rem 0;
  font-size: 1.4rem;
  font-weight: 600;
`

export const Character = styled(Name)`
  padding-top: 0px;
  font-weight: normal;
`
