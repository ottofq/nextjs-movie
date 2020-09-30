import React, { ReactElement, ReactChild, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ReactElement
  children?: ReactChild
  color?: string
  bordered?: boolean
}

const Button = ({ Icon, children, color, ...rest }: Props) => {
  return (
    <S.Button type="button" color={color} {...rest}>
      {Icon}
      {children}
    </S.Button>
  )
}

export default Button
