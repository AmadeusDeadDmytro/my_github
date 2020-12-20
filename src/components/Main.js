import React from 'react'
import styled from 'styled-components'
import Columns from "./Columns";

const Main = styled.View`
  flex: 1;
`

export default () => (
    <Main>
        <Columns />
    </Main>
)