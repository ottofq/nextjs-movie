import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  width: 40rem;
  position: relative;

  svg {
    width: 3rem;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  outline: none;
  color: #f0ece2;
  font-size: 1.6rem;
  z-index: 1000;

  &::placeholder {
    color: #f0ece2;
    font-size: 1.6rem;
  }
`

export const Button = styled.button`
  cursor: pointer;
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const WrapperMovie = styled.div`
  width: 100%;
  min-height: 10rem;
  max-height: 50rem;
  background-color: #f0ece2;
  border: 1px solid #eee;
  position: absolute;
  top: 100%;
  border-radius: 0.5rem;
  transition: height 2s ease;
  transition-delay: 2s;

  ul {
    height: 100%;
  }
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingWrapper = styled(WrapperMovie)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 5rem;
    width: 5rem;
    fill: #1a1a1a;
    animation: ${rotateAnimation} 2s infinite linear;
  }
`

export const MovieCard = styled.li`
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #1a1a1a;
`

const shimmer = keyframes`
  0% {
    background-position: -5.3rem 0;
}
  100% {
    background-position: 5.3rem 0;
}
`

export const MovieImage = styled.img`
  animation: ${shimmer} 1s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
`

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`

export const MovieTitle = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
  color: #1a1a1a;
`

export const MovieYear = styled.h3`
  font-size: 1.4rem;
  color: #1a1a1a;
`

export const Title = styled(MovieTitle)`
  margin-top: 1rem;
  text-align: center;
`
