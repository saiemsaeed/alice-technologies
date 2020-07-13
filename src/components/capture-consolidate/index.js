import React from 'react'

import BREAKPOINTS from 'constants/breakpoints'

import Title from 'components/ui/title'
import {
  ContainerWrapper,
  Container,
  Body,
  ImagesWrapper,
  TextContent,
  Paragraph,
  List,
  ListItem,
  TeamPicture,
  ListGroup,
} from './styles'

import teamMob3x from '../../../static/img/team-mobile@3x.png'

import knowledge1x from '../../../static/img/knowledge-mob.png'
import knowledge2x from '../../../static/img/knowledge-mob@2x.png'
import knowledge3x from '../../../static/img/knowledge-mob@3x.png'
import knowledgeDesk from '../../../static/img/knowledge-desk.png'
import MobileOnly from 'components/utils/mobile-only'
import DesktopOnly from 'components/utils/desktop-only'

const CaptureConsolidate = () => (
  <ContainerWrapper>
    <Container>
      <MobileOnly>
        <Title>Capture and consolidate the way you build</Title>
      </MobileOnly>
      <Body>
        <ImagesWrapper>
          <div style={{ width: '80%' }}>
            <TeamPicture>
              <source srcSet={`${teamMob3x} 3x`} />
              <img srcSet={`${teamMob3x}`} alt="" />
            </TeamPicture>
          </div>
          <div>
            <picture>
              <source
                srcSet={`${knowledgeDesk}`}
                media={`(min-width: ${BREAKPOINTS.TABLET}px)`}
              />
              <source
                srcSet={`${knowledge1x} 1x, ${knowledge2x} 2x, ${knowledge3x} 3x`}
              />
              <img srcSet={`${knowledge3x}`} alt="" />
            </picture>
          </div>
        </ImagesWrapper>
        <TextContent>
          <DesktopOnly>
            <header>
              <Title>Capture and consolidate the way you build</Title>
            </header>
          </DesktopOnly>
          <Paragraph>
            Key project knowledge sits on in your teams&apos; heads. ALICE
            collects this and consolidates this knowledge, alongside a BIM
            model, into a centralized planning system to help standardized your
            firm&apos;s &quot;way to build.&quot;
          </Paragraph>
          <Paragraph>
            This includes key information like how individual building elements
            are constructed:
          </Paragraph>
          <List>
            <ListGroup>
              <ListItem>Crew&nbsp;sizes&nbsp;and&nbsp;types</ListItem>
              <ListItem>Equipment</ListItem>
              <ListItem>Construction&nbsp;mateirals</ListItem>
              <ListItem>Modeling</ListItem>
            </ListGroup>
            <div>
              <ListItem>Production&nbsp;rates</ListItem>
              <ListItem>Recipes</ListItem>
              <ListItem>Calendars</ListItem>
              <ListItem>And&nbsp;more</ListItem>
            </div>
          </List>
        </TextContent>
      </Body>
    </Container>
  </ContainerWrapper>
)

export default CaptureConsolidate
