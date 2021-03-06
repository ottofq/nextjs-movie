import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 32.4rem auto;
  min-height: 40rem;
  width: 100%;
`

export const PosterImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
`

export const ContentContainer = styled.section`
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  gap: 0.8rem;
`

export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 2.4rem;
  }

  svg {
    margin: 0 0.3rem 0 auto;
  }
`

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  color: #f0ece2;
`

export const Facts = styled.section`
  width: 100%;
  position: relative;

  span {
    & + span {
      &::before {
        content: '';
        display: inline-flex;
        position: relative;
        top: -0.3rem;
        width: 0.5rem;
        height: 0.5rem;
        background-color: white;
        border-radius: 50%;
        margin: 0 0.8rem;
      }
    }
  }
`

export const Details = styled.p`
  font-size: 1.8rem;
  line-height: 3.5rem;
  font-weight: normal;
`

export const TitleActors = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  color: #f0ece2;
`

export const CrewsNameContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  li {
    width: 33%;
    margin-bottom: 1rem;
    p:first-child {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
`

export const ActorName = styled.p`
  font-size: 1.8rem;
`

export const FavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  span {
    display: none;
    left: 100%;
    position: absolute;
    background-color: #222;
    border-radius: 4px;
    color: #f0ece2;
    padding: 0.5rem;
    margin-left: 1rem;
    opacity: 0;
    z-index: 1;
    transition: opacity 1s;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 0.5rem;
      border-style: solid;
      border-color: transparent #222 transparent transparent;
    }
  }

  &:hover {
    span {
      display: inline;
      opacity: 1;
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`
