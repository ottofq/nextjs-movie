import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 32.4rem auto;
  min-height: 40rem;
  max-height: 50rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PosterImage = styled.img`
  height: 100%;
  max-height: 60rem;
  width: 100%;
  border-radius: 0.5rem;
`

export const ContentContainer = styled.section`
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  gap: 0.8rem;
`

export const NameContainer = styled.header`
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

export const Name = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  color: #f0ece2;
`

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Info = styled.section`
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

export const Bio = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: normal;
`
