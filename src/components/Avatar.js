import React from 'react'
import styled from 'styled-components'

const Avatar = styled.View`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 4px;
`

type Props = {
    size?: number
}

export default ({ size = 80, ...props }: Props) => {
    <Avatar size={size} {...props}/>
}