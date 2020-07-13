import React from 'react'
import PropTypes from 'prop-types'

import { Container, Bullet, Text } from './styles'

const ExploreCard = ({ item, handleSelect }) => (
  <Container selected={item.selected} onClick={() => handleSelect(item.id)}>
    <Bullet selected={item.selected} color={item.color} />
    <Text>{item.label}</Text>
  </Container>
)

ExploreCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleSelect: PropTypes.func,
}

export default ExploreCard
