import React from 'react'
import styled from 'styled-components'
import {ScrollView, Dimensions} from "react-native";
import Column from "./Column";

const StyledScrollView = styled(ScrollView)`
  margin: 2px;
`

const StyledColumn = styled(Column)`
  flex: 1;
  margin: 2px;
  min-width: ${() => Dimensions.get('window').width - 20};
`

export default ({...props}) => (
    <StyledScrollView horizontal {...props}>
        <StyledColumn title={'React'}/>
        <StyledColumn title={'Redux'}/>
    </StyledScrollView>
)