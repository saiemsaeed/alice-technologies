import React from 'react'
import PropTypes from 'prop-types'

import { Container, Text, CTABlock, Body, TitleWrapper, Header } from './styles'
import PrimaryButton from 'components/ui/buttons/primary-button'

const CallToAction = ({ showModal }) => (
  <Container>
    <Body>
      <Header>
        <TitleWrapper>Let ALICE help you plan better</TitleWrapper>
      </Header>
      <Text>
        Contact us today to see how you can plan better and realize massive
        schedule and cost savings on your construction project.
      </Text>
    </Body>
    <CTABlock>
      <PrimaryButton label="Find out more" kind="large" onClick={showModal} />
    </CTABlock>
  </Container>
)

CallToAction.propTypes = {
  showModal: PropTypes.func.isRequired,
}

export default CallToAction
