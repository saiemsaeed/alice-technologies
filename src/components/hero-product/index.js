import React from 'react'
import styled from 'styled-components'
import productCurve from '../../../static/img/product/product-curved-bg.png'
import productLaptop from '../../../static/img/product/product-laptop.png'
import MEDIA from '../../helpers/mediaTemplates'
import PrimaryButton from 'components/ui/buttons/primary-button'
import { primaryColor } from 'constants/theme'

const Section = styled.section`
  background-image: url(${productCurve});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
`

const LaptopDiv = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${productLaptop});
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 60%;
  height: 75vh;

  ${MEDIA.DESKTOP`
    background-image: none;
  `}
`
export const Container = styled.div`
  padding: 0 9rem;
  display: flex;

  ${MEDIA.DESKTOP_MD`
    flex-direction: column;
  `};

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

export const HeroContent = styled.div`
  color: ${primaryColor};
  margin-bottom: 10px;
  width: 70%;
  ${MEDIA.DESKTOP_MD`
    width: 65%;
    padding-bottom: 3rem;
  `};

  ${MEDIA.DESKTOP`
    width: 100%;
    padding-bottom: 3rem;
  `};
`

export const HeroTitle = styled.h1`
  font-size: 6.8rem;
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
    margin-top: 2rem;
    font-size: 3.2rem;
  `};
`

export const HeroSubtitle = styled.p`
  margin-bottom: 3rem;
  color: ${primaryColor};
  font-size: 1.2rem;
  line-height: 2.3rem;
  font-weight: 300;
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
    max-width: 70rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2.25rem;
    line-height: 4rem;
  `};
`

const HeroProduct = () => (
  <Section>
    <LaptopDiv>
      <Container>
        <HeroContent>
          <HeroTitle>The Alice AI simulation platform</HeroTitle>
          <HeroSubtitle>
            The Alice simulation platform is the first workflow in the
            construction industry to link the experience of general contractors,
            owners, and builders with an intelligence to power hundreds of plans
            in minutes. What took construction firms three to four months, now
            takes minutes.
          </HeroSubtitle>
          <PrimaryButton
            linkTo="/contact"
            linkFromButton={true}
            label="Learn More"
            kind="xg"
          />
        </HeroContent>
      </Container>
    </LaptopDiv>
  </Section>
)

export default HeroProduct
