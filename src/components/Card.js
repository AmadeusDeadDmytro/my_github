import React from "react";
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Octicons'
import { View } from 'react-native';

import Avatar from "./Avatar";
import { contentPadding } from "../themes/variables";

const avatarWidth = 36

const Card = styled.View`
  padding: ${contentPadding * 1.4}px ${contentPadding}px;
  border-width: 0;
  border-bottom-width: 0.5px;
  border-color: ${({ theme }) => theme.base01};
`

const HorizontalView = styled.View`
  flex-direction: row;
`

const Header = styled(HorizontalView)`
  align-items: center;
`

const LeftColumn = styled.View`
  align-items: flex-end;
  justify-content: flex-start;
  width: ${avatarWidth}px;
  margin-right: ${contentPadding}px;
`

const HeaderRow = styled(HorizontalView)`
  justify-content: space-between;
`

const Text = styled.Text`
  color: ${({ theme }) => theme.base04};
  line-height: 18px;
  font-size: 14px;
`


const Username = styled(Text)`
  font-weight: bold;
`

const MutedText = styled(Text)`
  opacity: 0.6;
`

const Timestamp = styled(MutedText)`
  font-size: 12px;
`

const MainColumn = styled.View`
  flex: 1;
  justify-content: center;
`

const MainColumnRowContent = styled(MainColumn)`
  flex-direction: row;
`

const ContentRow = styled(HorizontalView)`
  align-items: center;
  margin-top: ${contentPadding}px;
`

const HighlightContainerBase = styled(HorizontalView)`
  align-items: center; 
  justify-content: space-between;
  background-color: ${({ theme }) => theme.base01};
  border-radius: 4px;
`;

const HighlightContainer1 = styled(HighlightContainerBase)`
  background-color: ${({ theme }) => theme.base01};
`;

const HighlightContainer2 = styled(HighlightContainerBase)`
  background-color: ${({ theme }) => theme.base03};
`;

const RepositoryContainer = styled(HighlightContainer1)`
  padding: 0 ${contentPadding}px;
`

const OrganizationName = styled.Text`
  line-height: 30px;
`
const RepositoryName = styled.Text`
  line-height: 30px;
  font-weight: bold;
`

const CardIdContainer = styled(HighlightContainer1)`
  padding: 0 6px;
`

const CardItemId = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  opacity: 0.9;
`

const Comment = styled(Text)`
  flex: 1;
  opacity: 0.9;
`

const StarIcon = styled(Icon)`
  font-size: 16px;
  color: ${({ theme }) => theme.star};
`

const CardIcon = styled(Icon)`
  align-self: center;
  margin-right: ${contentPadding - 2}px;
  font-size: 20px;
  color: ${({ theme }) => theme.base04};
  opacity: 0.4;
`

type Props = {
    title: string
}

export default ({ ...props }: Props) => (
    <Card {...props}>
        <Header>
            <LeftColumn>
                <Avatar
                    size={avatarWidth}
                    source={{ uri: 'https://99px.ru/sstorage/1/2020/09/image_12909202057064394800.jpg' }}
                />
            </LeftColumn>
            <MainColumn>
                <HeaderRow>
                    <View>
                        <HorizontalView>
                            <Username>Amadeus</Username>
                            <Timestamp> • 34m</Timestamp>
                        </HorizontalView>
                    </View>
                    <MutedText>
                        commented on pull request
                    </MutedText>

                    <CardIcon name="comment-discussion"/>
                </HeaderRow>
            </MainColumn>
        </Header>

        <ContentRow>
            <LeftColumn />
            <MainColumn>
                <RepositoryContainer>
                    <HorizontalView>
                        <OrganizationName>react/</OrganizationName>
                        <RepositoryName>react</RepositoryName>
                    </HorizontalView>

                    <StarIcon name="star" />
                </RepositoryContainer>
            </MainColumn>
        </ContentRow>

        <ContentRow>
            <LeftColumn>
                <Avatar
                    size={avatarWidth / 2}
                    source={{ uri: 'https://99px.ru/sstorage/1/2020/09/image_12909202057064394800.jpg' }}
                />
            </LeftColumn>

            <MainColumnRowContent>
                <CardIdContainer>
                    <CardItemId>#5030</CardItemId>
                </CardIdContainer>

                <Comment numberOfLines={1}>&nbsp;Hi there, it would be nice to have this feature</Comment>
            </MainColumnRowContent>
        </ContentRow>
    </Card>
)