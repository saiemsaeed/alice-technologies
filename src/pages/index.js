import React, { useState, useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Layout from 'components/layout'

import MEDIA from 'helpers/mediaTemplates'
import Header from 'components/header'
import HomeHero from 'components/hero-home'
import CaseStudies from 'components/case-studies'
import ContructionPlan from 'components/contruction-plan'
import Pursuit from 'components/pursuit'
import HomeContact from 'components/home-contact'
import MapLogo from 'components/map-logo'

import Footer from 'components/footer'
import { primaryColor } from 'constants/theme'
import styled from 'styled-components'
import homeBackgroundImg from './../../static/img/home/background.jpg'

export const Heading2 = styled.h2`
  font-size: 3.2rem;
  line-height: 1.7;
  font-weight: 800;
  color: ${primaryColor};
  ${MEDIA.DESKTOP_MD`
  `}

  ${MEDIA.TABLET`
    font-size: 2.5rem;
    text-align: center;
  `}
`

const Spacer1 = styled.div`
  height: 12rem;
  ${MEDIA.TABLET`
    display: ${({ xs }) => (xs === false ? 'none' : 'block')};
  `}
`

const Spacer2 = styled.div`
  height: 8rem;
  ${MEDIA.TABLET`
    display: ${({ xs }) => (xs === false ? 'none' : 'block')};
  `}
`

const Index = ({ location }) => {
  const [setOpen] = useState(false)
  const state = location.state || {}
  const { from } = state

  return (
    <Layout>
      <BackgrounWrapper>
        <Header showModal={() => setOpen(true)} />
        <HomeHero showModal={() => setOpen(true)} />
        <Spacer2 />
        <CaseStudies />
        <Spacer1 />
        <Spacer1 xs={false} />
        <Spacer1 xs={false} />
        <ContructionPlan/>
        <Spacer1 xs={false} />
        <Spacer1 xs={false} />
        <Pursuit from={from} />
        <Spacer2 />
        <MapLogo />
        <Spacer2 />
        <HomeContact />
        <Spacer2 />
        <Footer />
      </BackgrounWrapper>
    </Layout>
  )
}

const BackgrounWrapper = styled.div`
  background-image: url(${homeBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  ${MEDIA.MIN_DESKTOP_SM`
    z-index: 0;
  `};
`

export default Index
