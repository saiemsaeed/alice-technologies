import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Layout from 'components/layout'
import Header from 'components/header'
import MEDIA from 'helpers/mediaTemplates'
import Footer from 'components/footer'
import HeroAbout from 'components/hero-about'
import CareersContent from 'components/careers-content'
import homeBackgroundImg from './../../static/img/about/dots.png'

const BackgrounWrapper = styled.div`
  background-image: url(${homeBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 0 top 15%;

  ${MEDIA.MIN_DESKTOP_SM`
    z-index: 0;
  `};
`

const mapProps = ({ allCareers }) => ({
  careers: allCareers.careers.map(x => ({
    url: x.career.url,
    ...x.career.data,
  })),
})

const AboutPage = ({ data, location }) => {
  const [setOpen] = useState(false)
  const state = location.state || {}
  const { from } = state

  return (
    <Layout>
      <Header showModal={() => setOpen(true)} />
      <BackgrounWrapper>
        <HeroAbout />
        <CareersContent {...mapProps(data)} from={from} />
      </BackgrounWrapper>
      <Footer />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export const query = graphql`
  query CareersPageContent {
    allCareers: allPrismicCareer {
      careers: edges {
        career: node {
          url: uid
          data {
            category
            location
            remote
            title
            visa
            body {
              html
              text
            }
          }
        }
      }
    }
  }
`

export default AboutPage
