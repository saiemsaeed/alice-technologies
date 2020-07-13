import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import MEDIA from 'helpers/mediaTemplates'

import logo from './../../../static/svg/alice-logo.svg'
import Nav from './nav'

const StyledLink = styled(Link)`
  &:hover,
  &:active {
    text-decoration: none;
  }
`
const Header = () => (
  <Container>
    <StyledLink to="/">
      <Image src={logo} alt="ALICE logo" />
    </StyledLink>
    <Nav />
  </Container>
)

const Image = styled.img`
  width: 24rem;
  height: auto;
  ${MEDIA.DESKTOP_LG`
    width: 18rem;
  `};
  ${MEDIA.DESKTOP`
    width: 18rem;
  `};
  ${MEDIA.TABLET`
    width: 16rem;
  `};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 9rem;
  width: 100%;
  ${MEDIA.DESKTOP_XG`
  padding: 4rem 9rem;
  `}
  ${MEDIA.TABLET`
    z-index: 0;
    padding: 4rem 2rem;
  `};
`

export default Header
