import React from 'react'
import styled from 'styled-components'
import {Dimensions} from "react-native";
import Column from "./Column";

import {contentPadding} from "../themes/variables";

const margin = 2

const getWidth = ({ first, last } = {}) => {
    const { width } = Dimensions.get('window');

    // if (first && last) return width
    // if (first || last) return width - contentPadding - margin ;

    return width - (2 * (contentPadding + margin)) ;
};

const StyledScrollView = styled.ScrollView`
    
`;

const StyledView = styled.View`
  flex: 1;
  width: ${getWidth}px;
`;

const StyledColumn = styled(Column)`
  flex: 1;
  margin: ${margin * 2}px ${margin}px;
  border-radius: 4px;
`;


export default props => (
    <StyledScrollView
        width={getWidth()}
        loop={false}
        removeClippedSubviews={false}
        contentContainerStyle={{ marginHorizontal: contentPadding + margin }}
        horizontal
        pagingEnabled
        {...props}
    >
        <StyledView first>
            <StyledColumn title={'React'}/>
        </StyledView>
        <StyledView>
            <StyledColumn title={'Redux'}/>
        </StyledView>
        <StyledView>
            <StyledColumn title={'GraphQL'}/>
        </StyledView>
        <StyledView>
            <StyledColumn title={'Node.js'}/>
        </StyledView>
        <StyledView last>
            <StyledColumn title={'PHP'}/>
        </StyledView>
    </StyledScrollView>
)