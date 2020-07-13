import React from 'react'
import { Consumer } from 'store/createContext'

import ResolvingScheduling from 'components/resolving-scheduling'

const ResolvingSchedulingContainer = () => (
  <Consumer>
    {({
      resolvingSchedulingList,
      selectedScheduling,
      handleSelectScheduling,
    }) => (
      <React.Fragment>
        <ResolvingScheduling
          resolvingSchedulingList={resolvingSchedulingList}
          selectedScheduling={selectedScheduling}
          handleSelectScheduling={handleSelectScheduling}
        />
      </React.Fragment>
    )}
  </Consumer>
)
export default ResolvingSchedulingContainer
