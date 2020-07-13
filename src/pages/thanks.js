import React, { useState } from 'react'
import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

import Layout from 'components/layout'

import Header from 'components/header'
import Footer from 'components/footer'

const StyledHeader = styled(Header)`
  position: relative;
  ${MEDIA.MIN_DESKTOP_SM`
    padding-bottom: 4rem;
  `};
`

const Container = styled.section`
  padding-top: 6rem;
  background: linear-gradient(180deg, #f1f5f7 47.86%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  ${MEDIA.MIN_DESKTOP_XG`
    &::before, &::after {
      background-repeat: no-repeat;
      height: 40rem;
      width: 40rem;
      position: absolute;
    }
    &::before {
      content:'';
      left: calc(0% - 30rem);
      top: 78rem;
      ${MEDIA.MIN_DESKTOP_SM`
      `};
    }
    &::after {
      content:'';
      top: 20rem;
      left: calc(100% - 15rem);
      ${MEDIA.MIN_DESKTOP_SM`
      `};
    }
  `};
`

const Main = styled.div`
  padding: 0 2rem;
  ${MEDIA.MIN_TABLET`
    padding: 0 9rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding: 0 14rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding: 0 16rem 0 14rem;
  `};

  ${MEDIA.MIN_DESKTOP_XG`
    max-width: 160rem;
    margin-left: auto;
    margin-right: auto;
  `};
`

const Subtitle = styled.h3`
  color: #212121;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin-bottom: 5rem;
  font-weight: 700;
  ${MEDIA.MIN_TABLET`
    font-size: 20px;
    line-height: 1.5;;
  `};
`

const Paragraph = styled.p`
  color: #212121;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin-bottom: ${({ first }) => (first ? '9rem' : '5rem')};
  ${MEDIA.MIN_TABLET`
    font-size: 20px;
    line-height: 1.5;;
  `};
`

const Thanks = () => {
  const [setOpen] = useState(false)
  return (
    <Layout>
      <StyledHeader showModal={() => setOpen(true)} />

      <Container>
        <Main>
          <Subtitle>Thank you!</Subtitle>
        </Main>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Thanks
