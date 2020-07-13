import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { white, accent, primaryColor } from 'constants/theme'

import HamburgerMenu from '../../ui/hamburger-menu'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  ${MEDIA.MIN_DESKTOP`
    display: block;
    padding-left: 6.5rem;
 `};
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  ${MEDIA.DESKTOP`
    display: none;
  `};
`

const Item = styled.li`
  border-bottom: 2px solid transparent;
  &:not(:last-child) {
    margin-right: 5rem;
    ${MEDIA.DESKTOP_MD`
      margin-right: 3.5rem;
    `};
  }
  a {
    color: ${primaryColor};
    font-weight: 700;
    font-size: 2.25rem;
    letter-spacing: -0.01em;
    line-height: 2rem;
    transition: all 0.2s;
    ${MEDIA.DESKTOP_LG`
      font-size: 1.75rem;
    `};
  }
  &:hover {
    border-bottom: 2px solid ${white};
    a {
      opacity: 1;
    }
  }
`

const StyledLink = styled(Link)`
  &:active {
    text-decoration: none;
  }
`

const Nav = () => {
  const active = false
  return (
    <Wrapper>
      <List>
        <Item active={active === 'home'}>
          <StyledLink to="/" activeStyle={{ color: accent }}>
            Home
          </StyledLink>
        </Item>
        <Item active={active === 'products'}>
          <StyledLink to="/products" activeStyle={{ color: accent }}>
            Products
          </StyledLink>
        </Item>
        <Item active={active === 'use-cases'}>
          <StyledLink to="/use-cases" activeStyle={{ color: accent }}>
            Use Cases
          </StyledLink>
        </Item>
        <Item active={active === 'about'}>
          <StyledLink to="/about" activeStyle={{ color: accent }}>
            About
          </StyledLink>
        </Item>
        <Item>
          <a href="https://medium.com/alice-technologies">Blog</a>
        </Item>
        <Item active={active === 'contact'}>
          <StyledLink to="/contact" activeStyle={{ color: accent }}>
            Contact
          </StyledLink>
        </Item>
      </List>
      <HamburgerMenu />
    </Wrapper>
  )
}

Nav.propTypes = {
  onRequestDemo: PropTypes.func,
  secondary: PropTypes.bool,
}

export default Nav
