import React from 'react'
import PropTypes from 'prop-types'

import BREAKPOINTS from 'constants/breakpoints'
import logoTypeMobile from './../../../../../static/svg/alice-logo.svg'
import logoTypeDesk from './../../../../../static/svg/alice-logo-desk.svg'

import { Container, CloseButton, ButtonIcon } from './header.css'

const MenuHeader = ({ onHideMenu }) => (
  <Container>
    <picture>
      <source
        srcSet={logoTypeDesk}
        media={`(min-width: ${BREAKPOINTS.TABLET}px)`}
      />
      <img src={logoTypeMobile} alt="ALICE logo type" />
    </picture>
    <CloseButton onClick={onHideMenu}>
      <ButtonIcon />
    </CloseButton>
  </Container>
)

MenuHeader.propTypes = {
  onHideMenu: PropTypes.func.isRequired,
}
export default MenuHeader
