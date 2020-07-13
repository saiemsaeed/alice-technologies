import React from 'react'
import PropTypes from 'prop-types'

import { Container, MenuButtonIcon } from './styles'

const MenuButton = ({ isShowingMenu, onMenuClick }) => (
  <Container onClick={onMenuClick}>
    <MenuButtonIcon isShowingMenu={isShowingMenu} />
  </Container>
)

MenuButton.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  isShowingMenu: PropTypes.bool.isRequired,
}

export default MenuButton
