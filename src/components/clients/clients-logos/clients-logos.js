import React from 'react'
import PropTypes from 'prop-types'

import { Container, Client } from './clients-logos.css'

const ClientsLogos = ({ clients }) => (
  <Container>
    {clients.map((client, i) => (
      <Client key={i}>{client}</Client>
    ))}
  </Container>
)

ClientsLogos.propTypes = {
  clients: PropTypes.array.isRequired,
}

export default ClientsLogos
