import React from 'react'

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
        <PeopleCard
          key={people.id}
          name={people.name}
          imageId={people.profile_path}
          character={people.character}
        />
      ))}
    </Slider>
  )
}

export default SliderPeople
