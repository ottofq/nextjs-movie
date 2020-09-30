import styled from 'styled-components'

import backgroundImage from '../../assets/background.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50rem;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${backgroundImage}) no-repeat center center content-box;
  background-size: cover;
`

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #f0ece2;
`
export const Description = styled.div`
  p {
    font-size: 3.2rem;
  }

  a {
    background: linear-gradient(to bottom, #f0ece2 0%, #f0ece2 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    transition: background-size 0.2s;

    &:hover {
      color: #000;
      background-size: 4px 50px;
      opacity: 1;
    }
  }
`
