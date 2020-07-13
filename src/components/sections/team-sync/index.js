import React from 'react'

import dayImg from '../../../../static/img/why-alice/day7.png'
import syncDemo from '../../../../static/img/why-alice/sync-demo-mob.png'

import Title from 'components/ui/title'

import {
  ContainerWrapper,
  Container,
  Header,
  Paragraph,
  ParagraphWrap,
  Pictures,
  DemoImg,
  DayImg,
  Content,
} from './styles'

const TeamInSync = () => (
  <ContainerWrapper>
    <Container>
      <Content>
        <Header>
          <Title>Keep the whole team in sync</Title>
        </Header>
        <ParagraphWrap>
          <Paragraph>
            ALICE automatically generates a full 4D, cost loaded schedule that
            you can use to visually communicate and track your project
            throughout the entire project lifecycle.
          </Paragraph>
        </ParagraphWrap>
      </Content>
      <Pictures>
        <DemoImg>
          <img src={syncDemo} alt="" />
        </DemoImg>
        <DayImg>
          <img src={dayImg} alt="" />
        </DayImg>
      </Pictures>
    </Container>
  </ContainerWrapper>
)

export default TeamInSync
