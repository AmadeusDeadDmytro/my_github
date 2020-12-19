import React from 'react'
import styled from 'styled-components'

const Avatar = styled.Image`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ theme }) => theme.base03};
  border-radius: 4px;
`

type Props = {
    size?: number,
    source: string
}

export default ({ size = 50, ...props }: Props) => (
    <Avatar size={size} {...props}/>
)