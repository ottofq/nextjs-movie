/* eslint-disable camelcase */
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

import PeopleCard from '../PeopleCard'
import Slider from '../Slider'

import * as S from './styles'

export interface PeopleProps {
  id: number
  name: string
  character: string
  profile_path: string
}

export interface Props {
  peoples: PeopleProps[]
  title: string
}

const SliderPeople = ({ peoples, title }: Props) => {
  return (
    <Slider title={title} slidesToShow={8}>
      {peoples.map(people => (
        <Link
          href={`/person/${people.id}/${slugify(people.name)}`}
          key={people.id}
        >
          <a>
            <PeopleCard
              name={people.name}
              imageId={people.profile_path}
              character={people.character}
            />
          </a>
        </Link>
      ))}
    </Slider>
  )
}

export default SliderPeople
