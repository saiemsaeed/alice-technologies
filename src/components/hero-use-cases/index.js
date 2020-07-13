import React from 'react'
import styled from 'styled-components'
import headerImg from '../../../static/img/usecases/header-bg.png'
import MEDIA from '../../helpers/mediaTemplates'
import { primaryColor } from 'constants/theme'
import bgDots from '../../../static/img/usecases/bg-dots.png'

const Section = styled.section`
  background-image: url(${bgDots}), url(${headerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left 0 top 2%, center;
  min-height: 70vh;

  ${MEDIA.TABLET`
    min-height: 65vh;
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
    font-size: 3.6rem;
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
  padding: 0 9rem;
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
    padding-right: 5rem;
    max-width: 140rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2.25rem;
    line-height: 4rem;
  `};
`

const HeroUseCases = () => {
  return (
    <Section>
      <Container>
        <HeroTitle>Use Cases</HeroTitle>
        <HeroDescription>
          ALICE works with top firms in the nation across industries and
          projects to work with pursuit and schedule teams on the most precise
          schedules delivered to date. Our customer success team ensures you are
          knowledgeable on the process and produces only the smartest plans for
          the project.
        </HeroDescription>
      </Container>
    </Section>
  )
}

export default HeroUseCases
