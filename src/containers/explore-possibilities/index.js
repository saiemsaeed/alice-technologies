import React from 'react'
import { Consumer } from 'store/createContext'

import ExplorePossibilities from 'components/explore-possibilities'

const ExplorePossibilitiesContainer = () => (
  <Consumer>
    {({ possibilitiesList, selectedPossibility, handleSelectPossibility }) => (
      <React.Fragment>
        <ExplorePossibilities
          possibilitiesList={possibilitiesList}
          selectedPossibility={selectedPossibility}
          handleSelect={handleSelectPossibility}
        />
      </React.Fragment>
    )}
  </Consumer>
)
export default ExplorePossibilitiesContainer
