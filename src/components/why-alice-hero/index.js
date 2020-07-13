import React from 'react'
import PropTypes from 'prop-types'

import PrimaryButton from 'components/ui/buttons/primary-button'

import { Container, HeroTitle, HeroSubtitle, HeroBody } from './styles'

const WhyAliceHero = ({ showModal }) => (
  <Container>
    <HeroBody>
      <HeroTitle>Build Smarter</HeroTitle>
      <HeroSubtitle>
        With the world &apos;s first AI-powered construction planning platform,
        you can optimize your construction build by running millions of
        simulations first.
      </HeroSubtitle>
      <PrimaryButton label="Get started" onClick={showModal} />
    </HeroBody>
  </Container>
)

WhyAliceHero.propTypes = {
  showModal: PropTypes.func.isRequired,
}

export default WhyAliceHero
