import React from 'react';
import styled, { ThemeProvider } from "styled-components";

import { DARK_THEME, LIGHT_THEME } from "../themes";
import {connect} from "react-redux";
import {setTheme} from "../actions";
import {State} from '../utils/types'

const StyledView = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.base00};
`

const App = ({ theme, ...props }) =>  {
  return (
      <ThemeProvider theme={theme}>
        <StyledView {...props}/>
      </ThemeProvider>
  );
}

const mapStateToProps = ({config, theme}: State) => ({
  config,
  theme
})

const mapDispatchToProps = {
  setTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
