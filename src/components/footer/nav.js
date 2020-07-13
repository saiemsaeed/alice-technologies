import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'components/ui/link'

import MEDIA from 'helpers/mediaTemplates'
import { grey } from 'constants/theme'

const StyledLink = styled(Link)`
  :hover,
  :active {
    text-decoration: none;
  }
`

const linkContent = link => (
  <NavLink>
    {link.icon && (
      <IconImg doubledLine={link.doubledLine} src={link.icon} alt="" />
    )}
    <div>
      {link.label}
      {link.sublabel && <div>{link.sublabel}</div>}
    </div>
  </NavLink>
)

const FooterNav = ({ title, links }) => (
  <Container>
    <Header>
      <NavTitle>{title}</NavTitle>
    </Header>
    <nav>
      <ul>
        {links.map((link, i) => (
          <NavLinkItem key={i}>
            <StyledLink to={link.href} state={link.state}>{linkContent(link)}</StyledLink>
          </NavLinkItem>
        ))}
      </ul>
    </nav>
  </Container>
)

FooterNav.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
}

const Container = styled.div`
  border-top: 1px solid rgba(93, 108, 124, 0.2);
  margin-bottom: 4rem;
  padding-left: 2rem;
  padding-top: 4rem;
  ${MEDIA.MIN_TABLET`
    padding-top: 0rem;
    border: 0
    margin-bottom: 0;
    padding-left: 0;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    flex: 1;
  `};
`

const Header = styled.header`
  margin-bottom: 2rem;
`

const NavTitle = styled.h3`
  color: ${grey};
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 700;

  ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
  `}
  ${MEDIA.DESKTOP`
    font-size: 1.6rem;
  `}
  ${MEDIA.TABLET`
    font-size: 1.6rem;
  `}
`

const NavLinkItem = styled.li`
  color: ${grey};
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  a {
    display: inline-block;
    border-bottom: 1.5px solid transparent;
    opacity: 0.7;
  }
  &:hover {
    a {
      /* border-bottom: 1.5px solid ${grey}; */
      color: ${grey};
      opacity: 1;
    }
  }

  ${MEDIA.DESKTOP_XG`
    font-size: 1.5rem;
  `}
  ${MEDIA.DESKTOP`
    font-size: 1.5rem;
  `}
  ${MEDIA.TABLET`
    font-size: 1.5rem;
  `}
`

const NavLink = styled.div`
  display: flex;
  align-items: center;
`
const IconImg = styled.img`
  margin-right: 1.2rem;
  margin-top: ${({ doubledLine }) => (doubledLine ? '-2.3rem' : '0')};
`

export default FooterNav
