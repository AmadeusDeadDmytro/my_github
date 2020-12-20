import React, {useEffect} from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { connect } from 'react-redux';
import { setTheme } from '../actions';
import type { State, ThemeObject } from '../utils/types';
import {loadTheme} from "../utils/helpers";
import Main from '../components/Main'

import {StatusBar, View} from 'react-native'
import {DEFAULT_THEME} from "../utils/constants/defaults";

const Root = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.base00};
`

const StatusBarContainer = styled(View)`
  height: 22px;
  background-color: ${({ theme }) => theme.base00};
`

const StyledMain = styled(Main)`
  flex: 1;
`

type Props = {
    setTheme: Function,
    theme: ThemeObject
}

const App = ({ setTheme, theme }: Props) => {
    // TODO: Remove this
    setTheme(DEFAULT_THEME)

    return (
        <ThemeProvider theme={theme}>
            <Root>
                <StatusBarContainer>
                    <StatusBar
                        backgroundColor={theme.base00}
                        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
                    />
                </StatusBarContainer>
                <StyledMain/>
            </Root>
        </ThemeProvider>
    )
};

const mapStateToProps = ({ config }: State) => ({
    config,
    theme: loadTheme(config),
});

const mapDispatchToProps = {
    setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
