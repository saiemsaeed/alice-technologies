/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { grey } from 'constants/theme'

import logoType from './../../../static/svg/alice-logo-dark.svg'

const FooterHeader = () => (
  <Container>
    <Logo>
      <img src={logoType} alt="ALICE logo" />
    </Logo>
    <HeaderText>
      ALICE is a construction planning, scheduling, & management tool powered by{' '}
      <abbr title="Artificial Inteligence">AI</abbr>.
    </HeaderText>
  </Container>
)

const Container = styled.div`
  margin-bottom: 4rem;
  padding-left: 2rem;
  ${MEDIA.MIN_TABLET`
    flex: 1 0 100%;
    padding-left: 0;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    flex: 1;
    padding-left: 0;
  `};
`

const Logo = styled.figure`
  margin-bottom: 2.5rem;
`

const HeaderText = styled.div`
  color: ${grey};
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 500;
  padding-right: 1rem;
  line-height: 1.7;

  ${MEDIA.DESKTOP_XG`
  font-size: 1.6rem;
     padding-right: 0rem;
     max-width: 28rem;
  `};

  ${MEDIA.DESKTOP`
  font-size: 1.6rem;
     padding-right: 0rem;
     max-width: 28rem;
  `};

  ${MEDIA.TABLET`
  font-size: 1.6rem;
    padding-right: 2rem;
    font-size: 1.5rem;
    line-height: 2.7rem;
  `};
`

export default FooterHeader
