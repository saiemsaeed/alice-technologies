import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { blue } from 'constants/theme'

const ActionButtonLink = ({ label, children, href }) => (
  <Container href={href} target="blank">
    <Label>{label}</Label>
    {children}
  </Container>
)

ActionButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
  href: PropTypes.string,
}

const Container = styled.a`
  border-radius: 0;
  font-weight: 500;
  padding: 1.2rem 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${blue};
  font-size: 1.8rem;
  border: 1px solid transparent;
`

const Label = styled.div`
  margin-right: 1rem;
`

export default ActionButtonLink
