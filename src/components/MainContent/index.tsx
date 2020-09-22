import React, { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

const MainContent = ({ data }) => {
  return (
    <S.Container>
      {data.map(item => (
        <li key={item.id}>
          <Link href={`/movie/${item.id}/${item.title.replace(/\s/g, '-')}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </S.Container>
  )
}

export default MainContent
