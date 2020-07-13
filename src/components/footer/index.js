import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { grey } from 'constants/theme'
import links from 'helpers/links-white-list'
import MEDIA from 'helpers/mediaTemplates'
import youtubeIcon from '../../images/icon-youtube.png'
import twitterIcon from '../../images/icon-twitter.png'
import linkedInIcon from '../../images/icon-linkedin.png'

import FooterNav from './nav'
import FooterHeader from './header'

const renderNavigations = links =>
  links.map((nav, i) => (
    <FooterNav key={i} title={nav.title} links={nav.links} />
  ))

const currentYear = new Date().getFullYear()

const Img = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  filter: contrast(0.2);

  ${MEDIA.DESKTOP_XG`
    width: 3.2rem;
    height: 3.2rem;
  `}

  ${MEDIA.DESKTOP`
    width: 3.2rem;
    height: 3.2rem;
  `}

  ${MEDIA.TABLET`
    width: 3.2rem;
    height: 3.2rem;
  `}
`

const SocialMediaIconsContainer = styled.div`
  max-width: 30rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

const Footer = () => (
  <Container>
    <FooterMain>
      <Col xs={12} md={3}>
        <FooterHeader />
      </Col>
      <Col xs={12} md={7}>
        <FooterNavigation>{renderNavigations(links)}</FooterNavigation>
      </Col>
      <Col
        xs={{ span: 8, offset: 2 }}
        md={{ span: 2, offset: 0 }}
        className="d-flex justify-content-between align-items-center"
      >
        <SocialMediaIconsContainer>
          <a href="https://twitter.com/AliceTechnology">
            <Img src={twitterIcon} />
          </a>
          <a href="https://www.linkedin.com/company/alice-technologies-inc/">
            <Img src={linkedInIcon} />
          </a>
          <a href="https://www.youtube.com/channel/UCLACA_ZOhRaSJBFP_QtrFLQ">
            <Img src={youtubeIcon} />
          </a>
        </SocialMediaIconsContainer>
      </Col>
    </FooterMain>
    <Copyright>
      {/* <CopyrightText>Designed in sunny California.</CopyrightText> */}
      <CopyrightText>
        &copy; Copyright 2012-{currentYear} ALICE Technologies Inc.
      </CopyrightText>
    </Copyright>
  </Container>
)

const Container = styled.div`
  padding: 0 9rem;

  ${MEDIA.TABLET`
  padding: 0 2rem;
  `}
`

const FooterMain = styled(Row)`
  padding: 10rem 0;

  ${MEDIA.TABLET`
    padding: 5rem 0;
  `}
`

const FooterNavigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${MEDIA.MIN_TABLET`
    width: 80%;
    justify-content: space-between;
    flex-direction: row;
  `};
  ${MEDIA.MIN_TABLET`
    flex: 3;
    flex-direction: row;
    flex-wrap: wrap;
  `};
`

const Copyright = styled.div`
  padding: 5rem 0;
  background: #f5f5fa;
  width: 100vw;
  margin-left: -50vw;
  left: 50%;
  position: relative;
`

const CopyrightText = styled.p`
  color: ${grey};
  font-size: 1.8rem;
  line-height: 1.7;
  width: max-content;
  margin: auto;

  ${MEDIA.DESKTOP_XG`
    font-size: 1.4rem;
  `}
  ${MEDIA.DESKTOP`
    font-size: 1.4rem;
  `}
  ${MEDIA.TABLET`
    font-size: 1.4rem;
  `}
`

export default Footer
