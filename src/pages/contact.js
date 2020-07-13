import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/header'
import MEDIA from '../helpers/mediaTemplates'
import HeroContact from '../components/hero-contact'
import { Row, Col } from 'react-bootstrap'
import { primaryColor, grey } from '../constants/theme'
import ContactForm from '../components/forms/contact-form'
import mapIcon from '../../static/img/contact/map-icon.png'
import phoneIcon from '../../static/img/contact/phone-icon.png'
import dotsPNG from '../../static/img/contact/dots.png'

const Container = styled.div`
  padding: 0 9rem;
  margin-bottom: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${dotsPNG});
  background-size: contain;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

const Heading4 = styled.h4`
  color: ${primaryColor};
  font-size: 2.4rem;
  font-weight: 500;

  ${MEDIA.DESKTOP_XG`
    font-size: 1.8rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 1.8rem;
  `};

  ${MEDIA.DESKTOP`
    font-size: 1.8rem;
  `};

  ${MEDIA.TABLET`
    font-size: 2rem;
  `};
`

export const P = styled.div`
  color: ${grey};
  font-size: 2rem;
  line-height: 1.7;
  font-weight: 400;
  height: max-content;
  max-width: 55rem;

  strong {
    font-weight: 800;
  }

  ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
    max-width: 45rem;
  `};

  ${MEDIA.DESKTOP_MD`
    font-size: 1.6rem;
    max-width: 45rem;
  `};

  ${MEDIA.TABLET`
    font-size: 1.6rem;
    max-width: 100%;
  `};
`

const InfoBox = styled.div`
  margin: 2rem;
  display: flex;
`

const Img = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 2rem;
`

const ContactPage = ({ location }) => {
  const [setOpen] = useState(false)
  const state = location.state || {}
  const { linkFromButton } = state

  return (
    <Layout>
      <Header showModal={() => setOpen(true)} />
      <HeroContact linkFromButton={linkFromButton} />
      <Container>
        <Row>
          <Col xs={12} md={5} lg={4} xl={4}>
            <InfoBox>
              <Img src={mapIcon} alt="" />
              <div>
                <Heading4>Office Location</Heading4>
                <P>1040 Noel Dr Suite 203 Menlo Park, CA 94025</P>
              </div>
            </InfoBox>
            <InfoBox>
              <Img src={phoneIcon} alt="" />
              <div>
                <Heading4>Phone</Heading4>
                <P>833.254.2383</P>
              </div>
            </InfoBox>
          </Col>
          <Col xs={12} md={7} lg={8} xl={8}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage
