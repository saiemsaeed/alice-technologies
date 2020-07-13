import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const buttonSizeFrom = kind => {
  const possibleKinds = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    sm: 'small',
    md: 'medium',
    lg: 'large',
  }

  return possibleKinds[kind] || possibleKinds.medium
}

const SecondaryButton = ({ label, kind, small, secondary, onClick }) => (
  <Container
    secondary={secondary}
    kind={buttonSizeFrom(kind)}
    small={small}
    onClick={onClick}
  >
    {label}
  </Container>
)

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  kind: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
}

export default SecondaryButton
