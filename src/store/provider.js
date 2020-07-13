import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './createContext'

import selectById from './selectors/select-by-id'

import savingQuestions from './states/savings-questions'
import possibilitiesList from './states/possibilities-questions'
import resolvingSchedulingList from './states/resolving-scheduling'

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
  state = {
    open: false,
    savingQuestions: savingQuestions,
    selectedQuestion: savingQuestions[0],
    possibilitiesList: possibilitiesList,
    selectedPossibility: possibilitiesList[0],
    resolvingSchedulingList: resolvingSchedulingList,
    selectedScheduling: resolvingSchedulingList[0],
    showModal: () => this.setState({ open: true }),
    hideModal: () => this.setState({ open: false }),
  }

  handleSelectQuestion = id => {
    this.setState(prevState => {
      const { selectedItem, newListState } = selectById(
        id,
        prevState.savingQuestions
      )

      return {
        ...this.state,
        selectedQuestion: selectedItem,
        savingQuestions: newListState,
      }
    })
  }

  handleSelectPossibility = id => {
    this.setState(prevState => {
      const { selectedItem, newListState } = selectById(
        id,
        prevState.possibilitiesList
      )

      return {
        ...this.state,
        selectedPossibility: selectedItem,
        possibilitiesList: newListState,
      }
    })
  }

  handleSelectScheduling = id => {
    this.setState(prevState => {
      const { selectedItem, newListState } = selectById(
        id,
        prevState.resolvingSchedulingList
      )

      return {
        ...this.state,
        selectedScheduling: selectedItem,
        resolvingSchedulingList: newListState,
      }
    })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          handleSelectQuestion: this.handleSelectQuestion,
          handleSelectPossibility: this.handleSelectPossibility,
          handleSelectScheduling: this.handleSelectScheduling,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
