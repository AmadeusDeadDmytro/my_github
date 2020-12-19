import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { connect } from 'react-redux';
import { setTheme } from '../actions';
import type { State } from '../utils/types';
import {loadTheme} from "../utils/helpers";

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.base00};
`;

const App = ({ theme, ...props }: State) => (
  <ThemeProvider theme={theme}>
    <StyledView {...props} />
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
