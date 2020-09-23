import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 32.4rem auto;
  padding: 0 1rem;
  height: 40rem;
`

export const PosterImage = styled.img`
  height: 100%;
  width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`

export const TitleContainer = styled.div`
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

export const ActorsNameContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const ActorName = styled.p`
  font-size: 1.8rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`
