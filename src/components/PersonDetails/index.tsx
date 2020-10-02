import React from 'react'
import { format, parseISO } from 'date-fns'
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook
} from 'react-icons/ai'

import * as S from './styles'

export interface Person {
  name: string
  profile_path: string
  known_for_department: string
  birthday?: string
  place_of_birth: string
  biography: string
}

interface SocialIds {
  twitter_id?: string
  facebook_id?: string
  instagram_id?: string
}

interface Props {
  person: Person
  socialIds: SocialIds
}

const PersonDetails = ({ person, socialIds }: Props) => {
  function formatDate(date: string) {
    const parseDate = parseISO(date)
    return format(parseDate, 'dd/MM/yyyy')
  }

  return (
    <S.Container>
      <S.PosterImage
        src={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w342/${person.profile_path}`
            : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
        }
      />
      <S.ContentContainer>
        <S.NameContainer>
          <S.Name>{person.name}</S.Name>
          <S.SocialLinks>
            {socialIds.twitter_id && (
              <li>
                <a
                  href={`https://www.twitter.com/${socialIds.twitter_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter size={32} />
                </a>
              </li>
            )}
            {socialIds.instagram_id && (
              <li>
                <a
                  href={`https://www.instagram.com/${socialIds.instagram_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={32} />
                </a>
              </li>
            )}
            {socialIds.facebook_id && (
              <li>
                <a
                  href={`https://www.facebook.com/${socialIds.facebook_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineFacebook size={32} />
                </a>
              </li>
            )}
          </S.SocialLinks>
        </S.NameContainer>
        <S.Info>
          <span>{person.known_for_department}</span>
          <span>{person.birthday && formatDate(person.birthday)}</span>
          <span>{person.place_of_birth}</span>
        </S.Info>
        <S.Bio>{person.biography}</S.Bio>
      </S.ContentContainer>
    </S.Container>
  )
}

export default PersonDetails
