import React from 'react'
import PropTypes from 'prop-types'

import ExploreCard from '../explore-card'

import { Container } from './styles'

const PossibilitiesQuestionList = ({ possibilitiesList, handleSelect }) => (
  <Container>
    {possibilitiesList.map(item => (
      <li key={item.id}>
        <ExploreCard item={item} handleSelect={handleSelect} />
      </li>
    ))}
  </Container>
)

PossibilitiesQuestionList.propTypes = {
  possibilitiesList: PropTypes.array,
  handleSelect: PropTypes.func,
}

export default PossibilitiesQuestionList
