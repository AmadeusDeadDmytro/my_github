import React from 'react'
import styled from 'styled-components'
import {contentPadding} from "../styles/variables";
import Card from './Card'
import Icon from 'react-native-vector-icons/Octicons'

const Column = styled.View`
  background-color: ${({ theme }) => theme.base02};
`

const Header = styled.View`
  padding: ${contentPadding}px;
  border-width: 0;
  border-bottom-width: 0.5px;
  border-color: ${({ theme }) => theme.base01};
`

const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.base04};
`

type Props = {
    title: string
}

export default ({ title, ...props }: Props) => (
    <Column {...props}>
        <Header>
            <Title>
                <Icon name={'home'} size={20}/>&nbsp;&nbsp;
                {title}
            </Title>
        </Header>

        <Card />
    </Column>
)