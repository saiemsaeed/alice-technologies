import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import MenuButton from './button'

import MenuNav from './nav'
import Contacts from './contacts'

import { Container, Navigation } from './styles'

const HamburgerMenu = props => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? 'hidden' : null
  })
  useEffect(() => {
    isMenuVisible ? window.scrollTo(0, 0) : null
  })
  return (
    <Container>
      <MenuButton
        isShowingMenu={isMenuVisible}
        onMenuClick={() => setMenuVisible(!isMenuVisible)}
      />
      {isMenuVisible && (
        <Navigation props={props}>
          <MenuNav props={props} />
          <Contacts props={props} />
        </Navigation>
      )}
    </Container>
  )
}

HamburgerMenu.propTypes = {
  onRequestDemo: PropTypes.func,
}

export default HamburgerMenu
