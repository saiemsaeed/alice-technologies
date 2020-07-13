import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Uppercase = ({ children }) => <Container> {children}</Container>

Uppercase.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.span`
  text-transform: uppercase;
`

export default Uppercase
