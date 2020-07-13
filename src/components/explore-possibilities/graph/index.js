import React from 'react'
import PropTypes from 'prop-types'

import ExploreExplainCard from '../explore-explain-card/'
import { GraphExplains, Picture, Container } from './styles'

const Graph = ({ graphSources, explains }) => {
  return (
    <Container>
      <Picture>
        {graphSources.map((graph, i) => (
          <source key={i} srcSet={graph.srcSet} media={graph.media} />
        ))}
        <img src={graphSources[0].srcSet} alt="" />
      </Picture>
      <GraphExplains>
        {explains[0] && (
          <ExploreExplainCard
            explainStyle={explains[0].style}
            explain={explains[0].texts}
          />
        )}
        {explains[1] && (
          <ExploreExplainCard
            second={true}
            explainStyle={explains[1].style}
            explain={explains[1].texts}
          />
        )}
      </GraphExplains>
    </Container>
  )
}

Graph.propTypes = {
  selectedPossibility: PropTypes.object,
  graphSources: PropTypes.array,
  explains: PropTypes.array,
}

export default Graph
