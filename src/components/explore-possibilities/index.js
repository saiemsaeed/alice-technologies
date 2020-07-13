import React from 'react'
import PropTypes from 'prop-types'

import Title from 'components/ui/title'
import Bold from 'components/ui/bold'
import Uppercase from 'components/ui/uppercase'

import {
  Container,
  Header,
  BlockWrapper,
  Paragraph,
  Subtitle,
  SubtitleText,
  Footer,
  ParagraphMain,
  GraphFooterBlock,
} from './styles'
import IconLogo from 'components/ui/icons/logo'
import PossibilitiesQuestionList from './possibilities-question-list'
import Graph from './graph'

const ExplorePossibilities = props => {
  const { possibilitiesList, selectedPossibility, handleSelect } = props
  return (
    <Container>
      <Header>
        <Title secondaryStyle={true}>Explore the Possibilities</Title>
      </Header>
      <BlockWrapper>
        <ParagraphMain>
          With your project knowledge centralized, ALICE can simulate your
          construction build
          <Bold>&nbsp;millions of times in just minutes&nbsp;</Bold>and quickly
          help your team explore different construction scenarios to find an
          optimal construction plan. This helps you to answer the tough
          questions very efficiently and early on in the construction process.
        </ParagraphMain>
      </BlockWrapper>
      <PossibilitiesQuestionList
        possibilitiesList={possibilitiesList}
        handleSelect={handleSelect}
      />
      <GraphFooterBlock>
        <Graph {...selectedPossibility} />
        <Footer>
          <Subtitle>
            <IconLogo small={true} />
            <SubtitleText>
              Using <Uppercase>ALICE</Uppercase>
            </SubtitleText>
          </Subtitle>
          <Paragraph>
            By utilizing ALICE&apos;s AI assisted planning and scheduling
            process, ALICE can simulate your construction build millions of
            times to come up with a more efficient construction sequence; saving
            you an average of 16.2% of your project duration and 14.7% of your
            project labor costs.
          </Paragraph>
        </Footer>
      </GraphFooterBlock>
    </Container>
  )
}

ExplorePossibilities.propTypes = {
  possibilitiesList: PropTypes.array,
  selectedPossibility: PropTypes.object,
  handleSelect: PropTypes.func,
}

export default ExplorePossibilities
