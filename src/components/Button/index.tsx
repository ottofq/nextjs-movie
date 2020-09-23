import React, { ReactElement, ReactChild, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ReactElement
  children: ReactChild
}

const Button = ({ Icon, children, ...rest }: Props) => {
  return (
    <S.Button type="button" {...rest}>
      {Icon ? Icon : ''}
      {children}
    </S.Button>
  )
}

export default Button
