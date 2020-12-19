import React from 'react'
import styled from 'styled-components'
import {contentPadding} from "../themes/variables";
import Card from './Card'

const Column = styled.View`
  background-color: ${({ theme }) => theme.base02};
`

const Header = styled.View`
  padding: ${contentPadding}px;
  border-width: 0;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.base01};
`

const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.base04};
  opacity: 0.5;
  
`

type Props = {
    title: string
}

export default ({ title, ...props }: Props) => (
    <Column {...props}>
        <Header>
            <Title>{title}</Title>
        </Header>

        <Card />
    </Column>
)