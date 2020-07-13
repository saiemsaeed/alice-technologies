import React from 'react'
import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { grey, mobileAppPadding } from 'constants/theme'
import ornamentsTriangle from '../../../static/svg/bg-triangle-particles-left.svg'

import ClientsLogos from './clients-logos/clients-logos'
import Bold from 'components/ui/bold'
import MortesonLogo from './logos/mortesonLogo'
import AfLogo from './logos/afLogo'
import BiGroupLogo from './logos/biGroupLogo'
import DprLogo from './logos/dprLogo'

const Title = styled.h3`
  color: ${grey};
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: 0.05em;
  margin-bottom: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  ${MEDIA.MIN_PHONE_LG`
    padding: 0 1rem;
    line-height: 2rem;
  `};
  ${MEDIA.MIN_TABLET`
    margin-bottom: 2rem;
  `};
  ${MEDIA.MIN_DESKTOP`
    margin-top: 6rem;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  `};
`

export const Container = styled.section`
  margin-top: 4rem;
  margin-bottom: 18.5rem;
  padding: ${mobileAppPadding};
  position: relative;

  ${MEDIA.MIN_TABLET`
    margin-bottom: 15rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    margin-bottom: 14rem;
  `};

  &::before {
    content:'';
    background-image: url('${ornamentsTriangle}');
    background-repeat: no-repeat;
    background-size: 21.5rem;
    background-position: -10rem 0rem;
    height: 21.5rem;
    left: -2.25rem;
    top: 20rem;
    position: absolute;
    width: 21.5rem;
    ${MEDIA.MIN_TABLET`
      left: 0rem;
      top: -10rem;
      width: 20rem;
      height: 40rem;
      background-position: -10rem 5rem;
      `};
    ${MEDIA.MIN_DESKTOP_SM`
      background-size: 30rem;
      background-position: -15rem 2rem;
    `};
    ${MEDIA.MIN_DESKTOP_LG`
      background-size: 40rem;
      background-position: -22rem 1rem;
    `};
  }
`

const Clients = () => (
  <Container>
    <Title>
      Utilized by some of the
      <Bold>&nbsp;most innovative construction firms&nbsp;</Bold>in the world.
    </Title>
    <ClientsLogos
      clients={[
        <MortesonLogo key="1" />,
        <DprLogo key="4" />,
        <AfLogo key="2" />,
        <BiGroupLogo key="3" />,
      ]}
    />
  </Container>
)

export default Clients
