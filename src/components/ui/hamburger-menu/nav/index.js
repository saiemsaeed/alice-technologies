import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { white } from 'constants/theme'

const StyledLink = styled(Link)`
  :hover,
  :active {
    text-decoration: none;
  }
`

const MenuNav = () => (
  <Container>
    <ul>
      <LinkItem>
        <StyledLink to="/">Home</StyledLink>
      </LinkItem>
      <LinkItem>
        <StyledLink to="/products">Products</StyledLink>
      </LinkItem>
      <LinkItem>
        <StyledLink to="/use-cases">Use Cases</StyledLink>
      </LinkItem>
      <LinkItem>
        <StyledLink to="/about">About</StyledLink>
      </LinkItem>
      <LinkItem>
        <a
          href="https://medium.com/alice-technologies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </LinkItem>
      <LinkItem>
        <StyledLink to="/contact">Contact</StyledLink>
      </LinkItem>
    </ul>
  </Container>
)

const Container = styled.nav`
  padding-top: 0rem;
`

const LinkItem = styled.li`
  padding-left: 4rem;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  a {
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    color: ${white};
    display: inline-block;
    /* border-bottom: 1.5px solid transparent; */
  }
  &:hover {
    a {
      border: none;
      outline: none;
      text-decoration: none;
    }
  }
`

export default MenuNav
