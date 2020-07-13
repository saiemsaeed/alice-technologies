import React from 'react'
import PropTypes from 'prop-types'

import { Container, Text } from './styles'

const ExploreExplainCard = ({ explain, explainStyle, second }) => (
  <Container second={second} explainStyle={explainStyle}>
    {explain.map((item, i) => (
      <Text key={i} index={i} explainStyle={explainStyle}>
        {item}
      </Text>
    ))}
  </Container>
)

ExploreExplainCard.propTypes = {
  explain: PropTypes.array,
  explainStyle: PropTypes.number,
  second: PropTypes.bool,
}

export default ExploreExplainCard
