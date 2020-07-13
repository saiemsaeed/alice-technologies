import React from 'react'
import PropTypes from 'prop-types'

import {
  ButtonContainer,
  Container,
  Label,
  StyledLink,
  StyledAnchor,
} from './styles'

const buttonSizeFrom = kind => {
  const possibleKinds = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xg: 'xg',
  }

  return possibleKinds[kind] || possibleKinds.medium
}

const PrimaryButton = ({
  label,
  children,
  linkTo,
  kind,
  small,
  type,
  onClick,
  outlink,
  linkFromButton,
  ...props
}) => {
  if (!linkTo) {
    return (
      <ButtonContainer type={type || 'button'} onClick={onClick} {...props}>
        <Container kind={buttonSizeFrom(kind)} small={small}>
          {label && <Label>{label}</Label>}
          {children && <Label>{children}</Label>}
        </Container>
      </ButtonContainer>
    )
  }
  if (outlink) {
    return (
      <StyledAnchor href={linkTo} {...props}>
        <Container kind={buttonSizeFrom(kind)} small={small}>
          <Label>{label}</Label>
        </Container>
      </StyledAnchor>
    )
  }
  return (
    <StyledLink to={linkTo} state={{ linkFromButton }}>
      <Container kind={buttonSizeFrom(kind)} small={small}>
        <Label>{label}</Label>
      </Container>
    </StyledLink>
  )
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  linkTo: PropTypes.string,
  kind: PropTypes.string,
  outlink: PropTypes.bool,
  type: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  linkFromButton: PropTypes.bool,
}

export default PrimaryButton
