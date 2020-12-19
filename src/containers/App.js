import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { connect } from 'react-redux';
import { setTheme } from '../actions';
import type { State } from '../utils/types';
import {loadTheme} from "../utils/helpers";
import Main from '../components/Main'

import {StatusBar, View} from 'react-native'

const Root = styled.View`
  flex: 1;
`

const StatusBarContainer = styled(View)`
  height: 22px;
  background-color: ${({ theme }) => theme.base01};
`

const StyledMain = styled(Main)`
  flex: 1;
`

const App = ({ theme }: State) => (
  <ThemeProvider theme={theme}>
      <Root>
          <StatusBarContainer>
              <StatusBar
                backgroundColor={theme.base01}
                barStyle={theme.isDark ? 'light-content' : 'dark-content'}
              />
          </StatusBarContainer>
          <StyledMain/>
      </Root>
  </ThemeProvider>
);

const mapStateToProps = ({ config }: State) => ({
  config,
  theme: loadTheme(config),
});

const mapDispatchToProps = {
  setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
