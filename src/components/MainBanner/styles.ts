import styled from 'styled-components'

export const Container = styled.div`
  height: 50rem;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://image.tmdb.org/t/p/original/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg')
      no-repeat center center content-box;
  background-size: cover;
  display: grid;
  grid-template-columns: 70rem auto 10rem;
  grid-template-areas: '. description .';
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  grid-area: description;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ContainerInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 4rem;
  color: #f0ece2;
`

export const Genres = styled.h2`
  font-size: 1.4rem;
  color: #f0ece2;
  font-weight: bold;
  letter-spacing: 1px;
`

export const Avarage = styled.span`
  font-size: 1.4rem;
  color: #f0ece2;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 1.6rem;
  color: #ccc;
  line-height: 2.5rem;
  overflow-wrap: break-word;
`
