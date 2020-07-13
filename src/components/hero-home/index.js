import React from 'react'
import PropTypes from 'prop-types'
import PrimaryButton from 'components/ui/buttons/primary-button'
import {
  Section,
  Container,
  HeroTitle,
  HeroSubtitle,
  HeroContent,
  ActionButtonContainer,
  HeroVideoWrapper,
  VideoPlayer,
} from './styles'

import HeroVideo from '../../../static/img/home/hero_video.mp4'

const Hero = () => (
  <Section>
    <Container>
      <HeroContent>
        <HeroTitle>
          The Generative Simulation Platform for Construction
        </HeroTitle>
        <HeroSubtitle>
          Use ALICE to solve complex building challenges on your highest-value
          projects so that you can bid, plan and build faster, cheaper and with
          more confidence
        </HeroSubtitle>
        <ActionButtonContainer>
          <PrimaryButton
            linkTo="/contact"
            linkFromButton={true}
            label="Get Started"
            kind="xg"
          />
        </ActionButtonContainer>
      </HeroContent>
      <HeroVideoWrapper>
        <VideoPlayer preload="auto" autoPlay={true} loop={true}>
          <source src={HeroVideo} type="video/mp4" />
          <track src="subtitles_en.vtt" kind="captions" srcLang="en" />
        </VideoPlayer>
      </HeroVideoWrapper>
    </Container>
  </Section>
)

Hero.propTypes = {
  showModal: PropTypes.func.isRequired,
}

export default Hero
