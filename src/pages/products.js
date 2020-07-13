import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/header'
import HeroProduct from '../components/hero-product'
import homeBackgroundImg from './../../static/img/home/background.jpg'
import MEDIA from '../helpers/mediaTemplates'
import Footer from '../components/footer'
import ProductPlanning from '../components/planning'
import ProductCaseStudies from '../components/product-case-studies'
import Strategizing from '../components/strategizing'
import UseAlice from '../components/use-alice'

const Spacer1 = styled.div`
  height: 12rem;
  ${MEDIA.DESKTOP`
    display: ${({ md }) => (md === false ? 'none' : 'block')};
  `}

  ${MEDIA.TABLET`
    display: ${({ xs }) => (xs === false ? 'none' : 'block')};
  `}
`

const Spacer2 = styled.div`
  height: 8rem;
  ${MEDIA.DESKTOP`
    display: ${({ md }) => (md === false ? 'none' : 'block')};
  `}

  ${MEDIA.TABLET`
    display: ${({ xs }) => (xs === false ? 'none' : 'block')};
  `}
`

const ProductsPage = () => {
  const [setOpen] = useState(false)
  return (
    <Layout>
      <BackgroundWrapper>
        <Header showModal={() => setOpen(true)} />
        <HeroProduct />
        <ProductPlanning />
        <Spacer1 />
        <Spacer2 md={false} xs={false} />
        <Strategizing />
        <UseAlice />
        <Spacer1 />
        <ProductCaseStudies />
        <Footer />
      </BackgroundWrapper>
    </Layout>
  )
}

const BackgroundWrapper = styled.div`
  /* background-image: url(${homeBackgroundImg}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  ${MEDIA.MIN_DESKTOP_SM`
    z-index: 0;
  `};
`

export default ProductsPage
