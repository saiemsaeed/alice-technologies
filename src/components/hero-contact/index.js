import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import productCurve from '../../../static/img/product/product-curved-bg.png'
import bgDots from '../../../static/img/usecases/bg-dots.png'
import MEDIA from '../../helpers/mediaTemplates'
import { primaryColor } from 'constants/theme'

const Section = styled.section`
  background-image: url(${bgDots}), url(${productCurve});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left 0 top 2%, center bottom;
  min-height: 55vh;

  ${MEDIA.DESKTOP_XG`
    min-height: 60vh;
  `}

  ${MEDIA.TABLET`
    min-height: 40vh;
  `}
`

export const HeroTitle = styled.h1`
  font-size: 5.8rem;
  font-weight: 900;
  margin-bottom: 3rem;
  line-height: 1.4;
  color: ${primaryColor};

  ${MEDIA.DESKTOP_XG`
    margin-top: 5rem;
    font-size: 4.8rem;
  `};

  ${MEDIA.DESKTOP_MD`
    margin-top: 5rem;
    font-size: 3.8rem;
  `};
  ${MEDIA.DESKTOP`
    margin-top: 5rem;
    font-size: 3.4rem;
  `};
  ${MEDIA.TABLET`
    margin-top: 7rem;
    font-size: 3.2rem;
  `};
`

export const Container = styled.div`
  padding: 7rem 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

export const HeroDescription = styled.p`
  margin-bottom: 3rem;
  color: ${primaryColor};
  font-size: 1.2rem;
  line-height: 2.3rem;
  font-weight: 300;
  text-align: center;
  width: 100%;

  ${MEDIA.MIN_PHONE`
    font-size: 1.4rem;
    line-height: 2.5rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 1.75rem;
    line-height: 3rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    font-size: 1.6rem;
    line-height: 3rem;
    width: 80%;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2.25rem;
    line-height: 4rem;
  `};
`

const HeroDescriptionShort = styled(HeroDescription)`
  ${MEDIA.MIN_DESKTOP`
    width: 70rem;
  `};
`

const HeroContact = ({ linkFromButton }) => (
  <Section>
    <Container>
      <HeroTitle>Contact Us</HeroTitle>
      {!linkFromButton ? (
        <HeroDescriptionShort>
          Find out how ALICE makes it easier for team to create, build, and run
          schedules in minutes, not months.
        </HeroDescriptionShort>
      ) : (
        <HeroDescription>
          ALICE delivers a new way to schedule and find hundreds of simulations
          for your project. What used to take weeks and even months, takes
          minutes to create new schedules for pursuits and pre-construction. Our
          intelligence platform combined with a team&apos;s industry knowledge
          create the best scenarios for time, costs, and resources. Talk with
          our team to find out more information.
        </HeroDescription>
      )}
    </Container>
  </Section>
)

HeroContact.propTypes = {
  linkFromButton: PropTypes.bool,
}

export default HeroContact
